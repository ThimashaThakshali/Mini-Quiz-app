import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [questions, setQuestions] = useState([]);
  const [serverUrl, setServerUrl] = useState(
    "http://localhost:3001/api/questions"
  );

  useEffect(() => {
    fetch(serverUrl)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      console.log("correct");
      setScore(score + 20);
    }
    console.log(score);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
  };
  return (
    <div className="App">
      {currentQuestion < questions.length ? (
        <div>
          <h1>Mini Quiz Application</h1>
          <p>{questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label>{option}</label>
              </div>
            ))}
          </form>
          <div>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your Score: {score}/100</p>
        </div>
      )}
    </div>
  );
}

export default App;
