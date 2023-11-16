const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/api/send-discord-webhook', async (req, res) => {
  const discordWebhookURL = 'https://discord.com/api/webhooks/1174752975755948073/l-T0FfnH8l2sTwkQ-lAQHqZJe27fn1CJaBCiYO0ZwmiegBmHP160lBCdlGJn5cNsPqmo';  // Podaj prawidłowy URL swojego webhooka Discorda

  try {
    const discordResponse = await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (discordResponse.ok) {
      res.json({ success: true });
    } else {
      res.status(discordResponse.status).json({ success: false, error: 'Error sending message to Discord.' });
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    res.status(500).json({ success: false, error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
