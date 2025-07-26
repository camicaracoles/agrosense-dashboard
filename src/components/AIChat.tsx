import { useState } from 'react';
import { askOpenAI } from '../services/openaiApi';

const AIChat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    const response = await askOpenAI(question);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full mt-6">
      <h2 className="text-lg font-bold text-green-700 mb-4">Agente IA: Consulta sobre tus cultivos</h2>
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
    </div>
  );
};

export default AIChat;
