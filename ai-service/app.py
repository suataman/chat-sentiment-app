from flask import Flask, request, jsonify
from gradio_client import Client

app = Flask(__name__)
client = Client("uataman/chat-sentiment-ai")  # Hugging Face Space URL

@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        data = request.get_json()
        text = data.get("text", "")
        if not text.strip():
            return jsonify({"error": "Boş metin gönderilemez."}), 400

        # Hugging Face'e isteği at
        result = client.predict(
            text=text,
            api_name="//predict"
        )

        return jsonify({"sentiment": result})
    except Exception as e:
        print("AI servis hatası:", e)
        return jsonify({"sentiment": "hata"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
