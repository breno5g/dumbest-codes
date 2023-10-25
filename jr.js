const question = {
  title: "What is your name?",
  type: "text",
  answer: "gluier Jorie",
  difficulty: "medium",
};

function foo() {
  switch (question.difficulty) {
    case question.difficulty === "hard":
      return "Oh";
    case question.difficulty === "medium":
      return "My";
    case question.difficulty === "easy":
      return "God";
    default:
      return "Good memories";
  }
}

console.log(foo());
