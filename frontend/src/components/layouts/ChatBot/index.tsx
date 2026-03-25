// Import dependencies
import { useState, useRef, useEffect } from "react";

// Import styled components
import {
  FloatingButton,
  Panel,
  PanelHeader,
  Messages,
  Message,
  TypingIndicator,
  InputRow,
  ChatInput,
  SendButton,
} from "./styled";

// Import assets
import { sendChatMessage } from "services/chatService";
import {
  BASE_SYSTEM_PROMPT,
  buildFormulaSystemPrompt,
} from "constants/chatPrompts";
import type { ProductData } from "assets/types";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatBotProps {
  formula?: ProductData;
}

const ChatBot: React.FC<ChatBotProps> = ({ formula }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Array<ChatMessage>>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const systemPrompt = formula
    ? buildFormulaSystemPrompt(formula)
    : BASE_SYSTEM_PROMPT;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendChatMessage(nextMessages, systemPrompt);
      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "Hubo un error al conectar con el asistente. Intentá de nuevo.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FloatingButton onClick={() => setOpen((v) => !v)} title="Asistente farmacéutico">
        💬
      </FloatingButton>

      {open && (
        <Panel>
          <PanelHeader>
            <h4>Asistente Farmacéutico</h4>
            <button onClick={() => setOpen(false)} title="Cerrar">✕</button>
          </PanelHeader>

          <Messages>
            {messages.length === 0 && (
              <Message $isUser={false}>
                ¡Hola! Soy el asistente virtual de Farmacéuticos Asociados.
                ¿En qué te puedo ayudar?
              </Message>
            )}
            {messages.map((message, index) => (
              // Messages are append-only, index as key is stable
              // eslint-disable-next-line react/no-array-index-key
              <Message key={index} $isUser={message.role === "user"}>
                {message.content}
              </Message>
            ))}
            {loading && (
              <TypingIndicator>El asistente está escribiendo...</TypingIndicator>
            )}
            <div ref={messagesEndRef} />
          </Messages>

          <InputRow onSubmit={handleSubmit}>
            <ChatInput
              value={input}
              onChange={(changeEvent) => setInput(changeEvent.target.value)}
              placeholder="Escribí tu consulta..."
              disabled={loading}
              autoFocus
            />
            <SendButton type="submit" disabled={loading || !input.trim()}>
              Enviar
            </SendButton>
          </InputRow>
        </Panel>
      )}
    </>
  );
};

export default ChatBot;
