# Chat Sentiment App

Bu proje, kullanıcıların yazdığı mesajların duygu analizini yapan ve anlık olarak sonuçları görüntüleyen tam yığın (full-stack) bir web uygulamasıdır. Frontend (web), Backend (API) ve AI Servis ayrı katmanlar üzerinden deploy edilmiştir.

## Proje Özeti  

Kullanıcıların mesajlaşarak sohbet edebildiği, yazışmaların AI tarafından duygu analizi yapılarak canlı olarak gösterildiği basit bir web uygulaması geliştirilmiştir.  
**Temel Özellikler (MVP):**  
- React Web: Basit chat ekranı, kullanıcı metin girer → mesaj listesi + duygu skoru  
- Backend (.NET Core API + SQLite): Kullanıcı kaydı (rumuz) + mesajların kaydı  
- AI Servis (Python + Hugging Face Spaces): Duygu analizi (pozitif / nötr / negatif)  
- Gerçek Zamanlı: Mesaj gönderildiğinde backend AI servisine isteği atar → analiz sonucu frontend’de gösterilir

## Kullanılan Teknolojiler 

| Katman    | Teknoloji                                                      | Açıklama                                   |
| --------- | -------------------------------------------------------------- | ------------------------------------------ |
| Frontend  | React.js, Vite, Vercel                                         | Kullanıcı arayüzü                          |
| Backend   | ASP.NET Core (.NET 8/9), Entity Framework Core, SQLite, Render | Mesajları kaydedip AI servisine istek atar |
| AI Servis | Python, Flask, Gradio Client, Hugging Face Spaces              | Türkçe duygu analizi modeli                |
| AI Model  | `saribasmetehan/bert-base-turkish-sentiment-analysis`          | Pozitif / Nötr / Negatif sınıflandırma     |
| AI Tool   | Chat GPT                                                       | Kod Tamamlayıcısı                          |

## Demo Linkleri  

| Katman         | Platform          | Link                                                                 |
|----------------|-------------------|----------------------------------------------------------------------|
| Web Chat       | Vercel            | `https://chat-sentiment-app-nu.vercel.app/`                          |
| Backend API    | Render            | `https://chat-sentiment-app-ncly.onrender.com`                       |
| AI Servis      | Render            | `https://chat-sentiment-app-ai-service.onrender.com`                 |
| Hugging Face   | HF Space          | `https://huggingface.co/spaces/uataman/chat-sentiment-ai`            |

| Katman    | Teknoloji                                                      | Açıklama                                   |
| --------- | -------------------------------------------------------------- | ------------------------------------------ |
| Frontend  | React.js, Vite, Vercel                                         | Kullanıcı arayüzü                          |
| Backend   | ASP.NET Core (.NET 8/9), Entity Framework Core, SQLite, Render | Mesajları kaydedip AI servisine istek atar |
| AI Servis | Python, Flask, Gradio Client, Hugging Face Spaces              | Türkçe duygu analizi modeli                |
| AI Model  | `saribasmetehan/bert-base-turkish-sentiment-analysis`          | Pozitif / Nötr / Negatif sınıflandırma     |

## Kurulum Adımları 

### 1. AI Servisi (Python + Flask)  
```bash 
cd ai-service
pip install flask gradio_client
python app.py
```
### 2. Backend (.NET Core + SQLite)
```bash
cd ai-service
pip install flask gradio_client
python app.py 
```
### 3. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

| Dosya                                       | Temel İşlevi                                                                                            | Elle Yazılmış Bölüm                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `frontend/components/Chat.jsx`              | Kullanıcının mesaj yazdığı, gönderdiği ve aldığı mesajlarla sohbet ekranının yönetildiği React bileşeni | Chat ekranının mantığı ve mesaj gönderme-algoritması tamamen el ile yazılmıştır. |
| `frontend/components/MessageInput.jsx`      | Kullanıcının mesaj girdiği form ve gönderme düğmesini içeren bileşen                                    | Form mantığı ve gönderme fonksiyonu elle geliştirilmiştir.                       |
| `frontend/components/MessageList.jsx`       | Gönderilen ve alınan mesajların listelenmesi ve görselleştirilmesi                                      | Listeleme ve stil kodu manuel olarak yazılmıştır.                                |
| `backend/Controllers/MessagesController.cs` | Mesajları alır, AI servisine gönderir, sonucu veritabanına kaydeder ve frontend’e döner                 | AI isteği ve veritabanı kayıt işlemleri elle yazılmıştır.                        |
| `backend/Data/AppDbContext.cs`              | Veritabanı bağlamını (DbContext) tanımlar ve `Messages` tablosuna erişimi sağlar                        | EF Core konfigürasyonu elle yapılmıştır.                                         |
| `backend/Models/Message.cs`                 | Mesaj veritabanı modelini içerir (Id, Text, Sentiment, CreatedAt)                                       | Model sınıfı sen tarafından yazılmıştır.                                         |
| `ai-service/app.py`                         | Hugging Face modeline istek atarak duygu analiz sonucunu döner                                          | Flask uygulaması ve istek kodu elle geliştirilmiştir.                            |




