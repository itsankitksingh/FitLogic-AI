# FitLogic - AI Personal Trainer

Welcome to FitLogic, your AI-powered personal trainer! This application is designed to provide you with personalized workout and nutrition plans, helping you achieve your fitness goals with the power of artificial intelligence. Engage in a conversation with your AI trainer to get workout routines, meal plans, and fitness tips tailored to you.

## Features

- **Conversational AI Trainer**: Chat with an AI to get personalized fitness and nutrition advice.
- **Personalized Workout Plans**: Get workout plans based on your goals and preferences.
- **Nutrition Guidance**: Receive meal ideas and general nutrition advice.
- **Prompt Suggestions**: Get started quickly with example prompts.
- **Markdown Support**: Responses are formatted with Markdown for easy readability.

## How It Works

FitLogic uses a Next.js frontend to provide a seamless chat interface. When you send a message, it is sent to a backend API route. This route uses the Google Gemini large language model to generate a response. The AI is prompted to act as a motivating and knowledgeable personal trainer, ensuring the advice is safe, effective, and encouraging. A disclaimer is always included to advise users to consult with a healthcare professional.

## Project Structure

```
/
├── app/
│   ├── api/chat/route.ts   # Backend API for the chat functionality
│   ├── components/         # Reusable React components
│   ├── global.css          # Global styles
│   ├── layout.tsx          # Main app layout
│   └── page.tsx            # The main page component with the chat interface
├── public/                 # Static assets
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/FitLogic-AI.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env.local` file in the root of the project and add the necessary environment variables.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode using Turbopack.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the production server.

### `npm run lint`

Runs the linter to check for code quality and style issues.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

`GOOGLE_API_KEY=`

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI**: [Google Gemini](https://ai.google.dev/)
- **Styling**: CSS Modules
