import { GoogleGenerativeAI } from '@google/generative-ai';

const { GOOGLE_API_KEY } = process.env;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Format conversation history for context
    const conversationHistory = messages.map((msg: any) => 
      `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
    ).join('\n\n');

    const prompt = `
You are FitLogic, an expert AI personal trainer and nutrition coach. Your goal is to provide safe, effective, and encouraging advice to help users achieve their fitness and health goals.

Your personality is:
- **Motivating and Positive**: Always be encouraging and supportive.
- **Knowledgeable and Scientific**: Provide advice based on established fitness and nutrition principles.
- **Safety-First**: Always include a disclaimer advising users to consult with a healthcare professional before starting any new fitness or diet plan.

---

## 💬 Conversation History

${conversationHistory}

---

## 🧠 Instructions

- Respond to the latest message from the user.
- Provide clear, actionable, and personalized advice.
- Use **Markdown** for formatting (lists, bolding) to make your answers easy to read.
- If asked for a workout plan, provide a structured plan, but remind the user to warm up and listen to their body.
- If asked for nutrition advice, offer general guidance and sample meal ideas, not strict medical advice.
- **Crucially, end every response with a disclaimer:** "Please consult with a healthcare professional before starting any new fitness or diet plan."
`;

    // Use Gemini for generation
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(text, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error: any) {
    console.error('Error handling POST:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}