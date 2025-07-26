const fakeResponses = [
  'Recuerda regar tus plantas temprano en la mañana.',
  'La humedad alta puede favorecer hongos, ten cuidado.',
  'Para mejorar la cosecha, te recomiendo usar compost orgánico.',
  'Asegúrate de medir el pH de la tierra semanalmente.',
  'Los tomates requieren al menos 6 horas de sol directo al día.'
];

export const askOpenAI = async (question: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Si no hay API Key => Fake Mode inmediato
  if (!apiKey || apiKey.trim() === '') {
    console.warn('🔧 No API Key found — Activating Fake Bot Mode.');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
    return `🤖 (Simulado) ${randomResponse}`;
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
        messages: [{ role: 'user', content: question }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);

      if (response.status === 429) {
        // Excediste el límite => Forzar modo simulado
        const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
        return `🤖 (Simulado tras error 429) ${randomResponse}`;
      }

      throw new Error(`API Error ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response from AI.';
  } catch (error) {
    console.error('Unexpected error while calling OpenAI:', error);
    // Si hubo otro error (por ejemplo conexión), devuelve respuesta fake
    const randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
    return `🤖 (Error handled) ${randomResponse}`;
  }
};
