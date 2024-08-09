# React + Vite

# Quiz App

This project is a simple quiz application built using React and Vite. The application allows users to answer multiple-choice questions and displays the correct answer after each question. The user’s score is tracked throughout the quiz, and the quiz can be reset after completion.

## Features

- Displays multiple-choice questions with four possible answers.
- Highlights the correct answer after a user makes a selection.
- Tracks and displays the user's score.
- Provides a "Next" button to navigate to the next question.
- Allows users to reset the quiz after completion.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd quiz-app
   ```

3. **Install the necessary dependencies:**

   ```bash
   npm install
   ```

### Running the Application

To start the development server and run the application locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server and open the application in your default web browser at `http://localhost:3000`.

### Project Structure

- **`src/`**: Contains the source code for the application.
  - **`components/`**: Contains the `Quiz` component that renders the quiz interface.
  - **`assets/`**: Contains the `Database.js` file, which includes the quiz questions and answers. -- -- **`Database.js`**: this Database is obtained from chatGPT. Prompt "create a quiz database.js file which contains an array containing objects as questions with keys question,option1,option2,option3,option4,ans-(option number). it should contain 10 such questions object" 
  - **`App.css`**: Contains the styles for the application. You don't need that if you are using tailwind css for styling.
  - **`main.js`**: The entry point of the application. 
- **`public/`**: Contains the static assets and the `index.html` file that is served by the development server.

### Creating the Quiz App

1. **Setup the React Application:** 
   - Created the React app using Vite, a fast build tool and development server.
   - Set up the basic project structure with components and assets.

2. **Building the Quiz Component:**
   - Used the `useState` hook to manage the quiz state, including the current question index, score, and whether the quiz is complete.
   - Used the `useRef` hook to manage references to each answer option for styling purposes.

3. **Styling the Quiz:**
   - Applied styles using Tailwind CSS to give the quiz a modern and clean design.
   - Dynamically updated the styles of selected answers based on whether they were correct or incorrect.

4. **Handling User Interactions:**
   - Created functions to handle answer selection, validate answers, move to the next question, and reset the quiz.

### Tools and technologies

- HTML
- Javascript
- React
- Vite
- Tailwind CSS
