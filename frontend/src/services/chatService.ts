interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const sendChatMessage = async (
  messages: Array<ChatMessage>,
  systemPrompt: string
): Promise<string> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/claude/chat`,
    {
      method: 'POST',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, systemPrompt }),
    }
  );

  if (!response.ok) {
    throw new Error(`[ChatService] Error ${response.status}`);
  }

  const data = await response.json();
  return data.content[0].text as string;
};
