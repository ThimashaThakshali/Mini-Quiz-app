const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const questions = [
  {
    question:
      "1.Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
    options: ["That's impossible", "20", "24", "28"],
    correctAnswer: "24",
  },
  {
    question: "2. Which fraction is the biggest?",
    options: ["3/5", "5/8", "1/2", "4/7"],
    correctAnswer: "5/8",
  },
  {
    question:
      "3. The store reduces the price of one product by 20 percent. How many percent do you need to raise to the percentage to get the original price?",
    options: ["25", "27", "30", "35"],
    correctAnswer: "25",
  },
  {
    question:
      "1.Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
    options: ["That's impossible", "20", "24", "28"],
    correctAnswer: "24",
  },
  {
    question:
      "1.Mary is 16 years old. She is 4 times older than her brother. How old will Mary be when she is twice his age?",
    options: ["That's impossible", "20", "24", "28"],
    correctAnswer: "24",
  },
];

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log("server is running on port" + port);
});
