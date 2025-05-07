# 🧠 Smart AI Interview Agent

Smart AI Interview Agent is a lightweight web application designed to help users practice technical interview questions with instant feedback. It offers topic-specific questions and evaluates user responses using simple logic (no external APIs required).

## 🚀 Features

* Choose interview topic: Python, HTML/CSS, or SQL
* Answer technical questions one by one
* Get feedback for each answer
* View a summary of your performance
* Option to retry the interview

## 💽 Tech Stack

| Layer              | Technology                                             |
| ------------------ | ------------------------------------------------------ |
| Frontend           | React (JavaScript)                                     |
| Backend (Optional) | Node.js / Express or Python / Flask (for custom logic) |
| AI Logic           | Rule-based feedback (mocked instead of OpenAI)         |

## 📦 Project Structure

```
smart-interview-agent/
├── public/
├── src/
│   ├── components/
│   │   ├── Interview.js
│   │   ├── Question.js
│   │   ├── Feedback.js
│   │   └── Summary.js
│   ├── services/
│   │   └── feedbackService.js
│   ├── questions.js
│   ├── App.js
│   └── App.css
├── package.json
└── README.md
```

## 💠 Setup Instructions

### Prerequisites

* Node.js installed
* Basic understanding of React

### Run the App

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/smart-interview-agent.git
cd smart-interview-agent
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. Open in browser at `http://localhost:3000`

---

## 📚 How It Works

* The app uses a static question bank categorized by topic.
* After each answer, the app uses rule-based logic in `feedbackService.js` to evaluate and give basic feedback.
* At the end, the user sees a performance summary and can **Retry Interview** to start over.

---

## 📄 License
MIT License – Feel free to use and modify this project.

---

## 🙌 Credits
Made with ❤️ for learning and demo purposes.

