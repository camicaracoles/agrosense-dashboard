🚀 React + TypeScript + Vite + OpenAI API Project
This project is a boilerplate using React, TypeScript, and Vite, integrated with the OpenAI API. It includes best practices like environment variables, modular folder structure, and advanced ESLint configuration with type-checking.

📦 Tech Stack

Vite

React

TypeScript

OpenAI API

ESLint (with TypeScript-aware linting)

SWC (optional) — For ultra-fast builds

🗂️ Project Structure

/public
/src
  ├── assets/        # Images, icons, etc.
  ├── components/    # Reusable React components
  ├── hooks/         # Custom React hooks
  ├── services/      # API calls (OpenAI, etc.)
  │    └── openaiApi.ts
  ├── pages/         # Page components
  ├── App.tsx
  └── main.tsx
.env                 # Your local environment variables (API keys)
.env.example         # Example file to share with others
.eslint.config.js    # Advanced ESLint configuration
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts

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

