using System;

namespace ChatSentiment.Api.Models
{
    public class Message
    {
        public int Id { get; set; }                 // PK
        public string Text { get; set; } = "";     // <-- burası gerekiyor
        public string Sentiment { get; set; } = ""; 
        public DateTime CreatedAt { get; set; }
        // isteğe bağlı: public string Sender { get; set; } = "user";
    }
}
