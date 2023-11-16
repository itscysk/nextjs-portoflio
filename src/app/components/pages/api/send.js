export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        // Tutaj możesz przetwarzać dane formularza, wysyłać e-maile, itp.
  
        // Na razie zwrócmy prostą odpowiedź, że dane zostały odebrane poprawnie.
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error processing form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }