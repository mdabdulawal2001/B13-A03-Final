function finalScore(omr) {
  if (
    typeof omr !== "object" ||
    omr === null ||
    Array.isArray(omr) ||
    typeof omr["right"] !== "number" ||
    typeof omr["wrong"] !== "number" ||
    typeof omr["skip"] !== "number"
  ) {
    return "Invalid";
  }
  const rightAnswer = omr["right"];
  const wrongAnswer = omr["wrong"];
  const skipAnswer = omr["skip"];
  const totalAnswer = rightAnswer + wrongAnswer + skipAnswer;
  const minusMark = wrongAnswer * 0.5;

  if (totalAnswer !== 100) {
    return "Invalid";
  }
  return Math.round(rightAnswer - minusMark);
}

const result = finalScore({ right: 67, wrong: 23, skip: 10 });
// const result = finalScore("[{ right: 30, wrong: 30, skip: 40 }]");
console.log(result);
