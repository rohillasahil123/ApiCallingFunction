const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit-lead', async (req, res) => {
   const dedupeURL = "http://13.201.83.62/api/v1/mpocket/dedupe";
   const dedupeReq = { mobileNumber: req.body.phone, email: req.body.email };

    try {
        const response = await axios.post(dedupeURL, dedupeReq);
        res.status(200).send(`Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
