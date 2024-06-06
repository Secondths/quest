async function generateQuestWithChatGPT(apiKey) {
    try {
        // URL Endpoint untuk API ChatGPT
        const url = 'https://api.openai.com/v1/chat/completions';

        // Data yang akan dikirim ke API ChatGPT
        const data = {
            model: 'gpt-3.5-turbo-16k', // Model ChatGPT yang akan digunakan (Anda dapat mengganti dengan model lain jika diperlukan)
            prompt: 'Generate a random quest for me.', // Prompt untuk menunjukkan tujuan penggunaan ChatGPT
            max_tokens: 50, // Maksimum token untuk quest yang dihasilkan
            temperature: 0.7 // Kontrol kreativitas dari ChatGPT (0.7 adalah nilai umum)
        };

        // Konfigurasi permintaan HTTP
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sk-proj-hTfCX47wRhWNeQBiv5GPT3BlbkFJ9rSKTOMX8U2NHDcFfASY}` // Menggunakan kunci API yang diberikan
            },
            body: JSON.stringify(data)
        };

        // Kirim permintaan ke API ChatGPT
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        // Tampilkan quest yang dihasilkan
        if (responseData && responseData.choices && responseData.choices.length > 0) {
            const quest = responseData.choices[0].text.trim();
            document.getElementById('questContainer').innerText = quest;
            document.getElementById('generateButton').classList.add('hidden');
            document.getElementById('questContainer').classList.remove('hidden');
        } else {
            throw new Error('Failed to generate quest.');
        }
    } catch (error) {
        console.error('Error generating quest:', error);
    }
}

// Event listener untuk tombol "Generate Quest"
document.getElementById('generateButton').addEventListener('click', () => {
    const apiKey = 'sk-proj-hTfCX47wRhWNeQBiv5GPT3BlbkFJ9rSKTOMX8U2NHDcFfASY'; // Ganti YOUR_API_KEY dengan kunci API ChatGPT Anda
    generateQuestWithChatGPT(apiKey);
});
