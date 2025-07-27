# AgroSense Dashboard 🌱

Interactive agricultural monitoring dashboard, developed with React + TypeScript + Tailwind CSS, simulating real-time sensor data and integrating an AI agent for intelligent queries.

## 🔗 Demo Online
[Ver Demo en Vercel](
https://agrosense-dashboard.vercel.app/)

## 🖥️ Technologies Used
- React + Vite + TypeScript.
- Tailwind CSS.
- Chart.js (temperature graph).
- Simulated API consumption (mock JSON).
- OpenAI API integration (AI chat).

## 📊 Features
- Real-time display of temperature, humidity, water consumption, and alerts.
- Historical temperature graph.
- Consult an AI agent about crop questions.
- Responsive and clean design.

## 🎯 Objective
This project was created as a technical demo for MIIDO, showcasing skills in:
- Creating modern dashboards.
- Managing API statuses and consumption.
- Integrating AI applied to the end user.
- Best practices in frontend development.

## 👤 Developed by
Camila García | [GitHub](https://github.com/camicaracoles) | [LinkedIn](https://www.linkedin.com/in/camilafranciscagarciabrito/)

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/camicaracoles/agrosense-dashboard.git
cd agrosense-dashboard

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env file based on .env.example:
cp .env.example .env

Edit .env and add your OpenAI API Key:
VITE_OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXX

4. Run the Development Server
npm run dev

5. Lint the Project
npm run lint

6. Build for Production
npm run build

🧠 How to Use OpenAI API
In /src/services/openaiApi.ts you’ll find a function to make requests to OpenAI:

export const askOpenAI = async (question: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  // fetch request to OpenAI...
};

📝 ESLint Configuration

This project uses an advanced ESLint setup with:

TypeScript-aware rules.
React specific best practices.
Type-checked linting.

You can modify .eslint.config.js to add custom rules if needed.

🔒 Security Note
Never commit your .env file or API Keys to a public repository.
The .gitignore already excludes .env by default.

🚧 To Do
 Add UI components

 Implement Fake API Mode (for development without API Key)

 Add error handling for API calls

 Deploy to Vercel / Netlify

📄 License
MIT License — Feel free to use and adapt.

✨ Author
Camila García (@camicaracoles)

