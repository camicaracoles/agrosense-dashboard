import { useState } from 'react';
import { askOpenAI } from '../services/openaiApi';

const AIChat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ question: string; answer: string }[]>([]);

  const isFakeMode = !import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY.trim() === '';

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');

    try {
      let response = '';

      if (isFakeMode) {
        const fakeResponses = [
          "La humedad actual es ideal para el cultivo.",
          "Existe un riesgo moderado de plagas en los próximos días.",
          "Se recomienda aumentar el riego en un 10%.",
          "El consumo de agua estimado para esta semana es de 1.300L.",
        ];
        response = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
        await new Promise((res) => setTimeout(res, 1000)); // Simula tiempo de carga
      } else {
        response = await askOpenAI(question);
      }

      setAnswer(response);
      setChatHistory((prev) => [{ question, answer: response }, ...prev].slice(0, 5));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching from OpenAI:', error.message);
        alert(error.message);
      } else {
        console.error('Unexpected error', error);
        alert('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full mt-6">
      <h2 className="text-lg font-bold text-green-700 mb-4">Agente IA: Consulta sobre tus cultivos</h2>

      {isFakeMode && (
        <div className="mb-4 text-sm text-yellow-600 font-semibold">
          ⚠️ Estás en Modo Fake Bot (sin conexión real a OpenAI)
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          placeholder="Ej: ¿Cómo afectará la humedad a mis tomates?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={handleAsk}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Consultando...' : 'Preguntar'}
        </button>
      </div>

      {answer && (
        <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
          <strong>Respuesta IA:</strong> {answer}
        </div>
      )}

      {chatHistory.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-600 mb-2">Historial de Consultas</h3>
          <ul className="space-y-2">
            {chatHistory.map((item, idx) => (
              <li key={idx} className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-sm"><strong>Pregunta:</strong> {item.question}</p>
                <p className="text-sm text-green-700"><strong>Respuesta:</strong> {item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIChat;
