import { useState, useCallback, useRef } from 'react';
import { sendMessageToGPTTurbo } from '../lib/sendMessageToGPT';
import { CHATBOT_SYSTEM_PROMPT } from '../lib/chatbotKnowledgeBase';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatbotState {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

export function useChatbot() {
  const [state, setState] = useState<ChatbotState>({
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hi there! 👋 I'm here to help you learn about Webnova's free website building service.\n\nWe build custom websites completely FREE upfront - you only pay if you're 100% happy with the result!\n\nWhat brings you here today - are you looking for a new website, an AI assistant for your business, or maybe both?",
        timestamp: new Date()
      }
    ],
    isLoading: false,
    isOpen: false,
    error: null
  });

  const conversationHistory = useRef<Array<{ role: string; content: string }>>([
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT }
  ]);

  const generateMessageId = useCallback(() => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const openChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: true }));
  }, []);

  const closeChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const toggleChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const userMessageObj: ChatMessage = {
      id: generateMessageId(),
      role: 'user',
      content: userMessage.trim(),
      timestamp: new Date()
    };

    // Add user message to state
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessageObj],
      isLoading: true,
      error: null
    }));

    // Add user message to conversation history
    conversationHistory.current.push({
      role: 'user',
      content: userMessage.trim()
    });

    try {
      // Create the full conversation context for GPT
      const conversationContext = conversationHistory.current
        .map(msg => `${msg.role === 'system' ? 'SYSTEM: ' : msg.role === 'user' ? 'USER: ' : 'ASSISTANT: '}${msg.content}`)
        .join('\n\n');

      // Send to GPT with full context using Turbo model
      const assistantResponse = await sendMessageToGPTTurbo(
        `${conversationContext}\n\nUSER: ${userMessage.trim()}\n\nPlease respond as the Webnova AI assistant based on the system instructions above. Keep your response conversational, helpful, and naturally guide toward booking a call when appropriate. If this is a good moment to suggest booking a call, end your response with: "If you're ready to grow your business, I'd love to connect you with our team to discuss your specific needs!"`
      );

      const assistantMessageObj: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date()
      };

      // Add assistant response to conversation history
      conversationHistory.current.push({
        role: 'assistant',
        content: assistantResponse
      });

      // Update state with assistant response
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessageObj],
        isLoading: false
      }));

    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: `Sorry, I'm having trouble connecting right now. ${errorMessage}`
      }));

      // Add a fallback message
      const fallbackMessage: ChatMessage = {
        id: generateMessageId(),
        role: 'assistant',
        content: "I apologize, but I'm experiencing some technical difficulties. In the meantime, I'd love to connect you with our team directly! You can book a free call to discuss your website needs: https://api.leadconnectorhq.com/widget/booking/oyLr4DgEEt5IZrB0FHMP",
        timestamp: new Date()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, fallbackMessage]
      }));
    }
  }, [generateMessageId]);

  const resetConversation = useCallback(() => {
    setState(prev => ({
      ...prev,
      messages: [
        {
          id: 'welcome',
          role: 'assistant',
          content: "Hi there! 👋 I'm here to help you learn about Webnova's free website building service.\n\nWe build custom websites completely FREE upfront - you only pay if you're 100% happy with the result!\n\nWhat brings you here today - are you looking for a new website, an AI assistant for your business, or maybe both?",
          timestamp: new Date()
        }
      ],
      error: null
    }));

    // Reset conversation history
    conversationHistory.current = [
      { role: 'system', content: CHATBOT_SYSTEM_PROMPT }
    ];
  }, []);

  return {
    // State
    messages: state.messages,
    isLoading: state.isLoading,
    isOpen: state.isOpen,
    error: state.error,
    
    // Actions
    sendMessage,
    openChat,
    closeChat,
    toggleChat,
    clearError,
    resetConversation
  };
}
