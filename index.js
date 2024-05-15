import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Import from the URL


const generateBtn = document.getElementById('generateBtn');
const outputDiv = document.getElementById('output');

generateBtn.addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value.trim();
  if (prompt === '') {
    alert('Please enter a prompt.');
    return;
  }

  try {
    const result = await generateStory(prompt);
    outputDiv.textContent = result;
  } catch (error) {
    console.error('Error:', error);
    outputDiv.textContent = 'Error occurred. Please try again.';
  }
});

async function generateStory(prompt) {
  const API_KEY = 'AIzaSyBp9kdE682FNJ-v66CovAOgSB2-aKiNaGI'; 
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
}
