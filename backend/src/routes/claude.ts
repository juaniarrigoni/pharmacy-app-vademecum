import { Router, Request, Response } from 'express';

export const claudeRouter = Router();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
  systemPrompt: string;
}

claudeRouter.post('/chat', async (req: Request, res: Response) => {
  const { messages, systemPrompt } = req.body as ChatRequestBody;

  if (!Array.isArray(messages) || !systemPrompt) {
    return res.status(400).json({ error: 'messages[] y systemPrompt son requeridos' });
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    const data = await upstream.json();
    return res.json(data);
  } catch (err) {
    console.error('[claude-proxy]', err);
    return res.status(502).json({ error: 'Error al conectar con el asistente' });
  }
});
