import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/v1/dream', async (req, res) => {
    const prompt = req.body.prompt;
    const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
    });
    const image = aiResponse.data.data[0].url;
    res.send({ image });
});

app.listen(8080, () => console.log('make art on http://localhost:8080/api/v1/dream'));