using Microsoft.AspNetCore.Mvc;
using ChatSentiment.Api.Data;
using ChatSentiment.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text;

namespace ChatSentiment.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly HttpClient _httpClient;

        public MessagesController(AppDbContext context)
        {
            _context = context;
            _httpClient = new HttpClient();
        }

       
        [HttpPost]
        public async Task<IActionResult> PostMessage([FromBody] Message msg)
        {
            if (string.IsNullOrWhiteSpace(msg.Text))
                return BadRequest("Mesaj boş olamaz.");

            string sentimentResult = "belirsiz";

            try
            {
                // AI servisine istek at
                var aiServiceUrl = "https://chat-sentiment-app-ai-service.onrender.com/analyze";

                var aiContent = new StringContent(JsonSerializer.Serialize(new { text = msg.Text }), Encoding.UTF8, "application/json");

                var aiResponse = await _httpClient.PostAsync(aiServiceUrl, aiContent);
                var aiJson = await aiResponse.Content.ReadAsStringAsync();

                using var aiDoc = JsonDocument.Parse(aiJson);
                if (aiDoc.RootElement.TryGetProperty("sentiment", out var sentimentProperty))
                {
                    sentimentResult = sentimentProperty.GetString() ?? "belirsiz";
                }
                else
                {
                    sentimentResult = "hata";
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"AI servisine bağlanılamadı: {ex.Message}");
                sentimentResult = "hata";
            }

            // Mesajı kaydet
            msg.Sentiment = sentimentResult;
            msg.CreatedAt = DateTime.UtcNow;
            _context.Messages.Add(msg);
            await _context.SaveChangesAsync();

            return Ok(new { sentiment = sentimentResult });
        }

        // GET /api/messages → son mesajları getir
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var messages = await _context.Messages
                .OrderByDescending(m => m.CreatedAt)
                .Take(50)
                .ToListAsync();

            return Ok(messages);
        }
    }
}
