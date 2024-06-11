// src/services/openaiService.js
import axios from 'axios';

const openAiApiKey = "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";

if (!openAiApiKey) {
  throw new Error("API key is missing. Please set it in the .env file.");
}

const openaiService = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAiApiKey}`,
  },
});

export const getAIResponse = async (prompt) => {
  try {
    const response = await openaiService.post('/completions', {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to fetch AI response");
  }
};
