/**
 * Sends a message to OpenAI's GPT-3.5-Turbo API and returns the assistant's response
 * @param userMessage - The message from the user to send to GPT
 * @returns Promise<string> - The assistant's reply
 * @throws Error if the API call fails or returns an error
 */
export async function sendMessageToGPT(userMessage: string): Promise<string> {
  // Get the API key from environment variables
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please check your .env.local file.');
  }

  if (!userMessage.trim()) {
    throw new Error('User message cannot be empty.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}. ${
          errorData.error?.message || 'Unknown error'
        }`
      );
    }

    const data = await response.json();

    // Validate the response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response structure from OpenAI API');
    }

    const assistantReply = data.choices[0].message.content;

    if (!assistantReply) {
      throw new Error('No content received from OpenAI API');
    }

    return assistantReply.trim();
  } catch (error) {
    // Re-throw with more context if it's already an Error
    if (error instanceof Error) {
      throw error;
    }
    
    // Handle unexpected error types
    throw new Error(`Unexpected error calling OpenAI API: ${String(error)}`);
  }
}

/**
 * Sends a message to OpenAI's GPT-3.5-Turbo API (optimized version)
 * @param userMessage - The message from the user to send to GPT
 * @returns Promise<string> - The assistant's reply
 */
export async function sendMessageToGPTTurbo(userMessage: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please check your .env.local file.');
  }

  if (!userMessage.trim()) {
    throw new Error('User message cannot be empty.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: userMessage,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}. ${
          errorData.error?.message || 'Unknown error'
        }`
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response structure from OpenAI API');
    }

    const assistantReply = data.choices[0].message.content;

    if (!assistantReply) {
      throw new Error('No content received from OpenAI API');
    }

    return assistantReply.trim();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error(`Unexpected error calling OpenAI API: ${String(error)}`);
  }
}
