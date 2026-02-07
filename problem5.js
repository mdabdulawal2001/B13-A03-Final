function analyzeText(str) {
  // type check
  if (typeof str !== "string") {
    return "Invalid";
  }

  // trim
  const removeSpaceFromStartAndEnd = str.trim();
  if (removeSpaceFromStartAndEnd === "") {
    return "Invalid";
  }
  // split
  const wordsOfStr = removeSpaceFromStartAndEnd.split(" ");
  if (wordsOfStr.includes("")) {
    return "Invalid";
  }

  //   counting latter and length
  let longWord = "";
  let countText = 0;
  for (const word of wordsOfStr) {
    countText += word.length;
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return { longwords: longWord, token: countText };
}

const result = analyzeText("");
console.log(result);

// system 2
// function analyzeText(str) {
//   if (typeof str !== "string") {
//     return "Invalid";
//   }

//   const trimmedStr = str.trim();
//   if (trimmedStr === "") {
//     return "Invalid";
//   }

//   // split the string and automatically remove empty strings
//   const wordsOfStr = trimmedStr.split(" ").filter(Boolean);

//   let longWord = "";
//   let countText = 0;

//   for (const word of wordsOfStr) {
//     countText += word.length;
//     if (word.length > longWord.length) {
//       longWord = word;
//     }
//   }

//   return { longwords: longWord, token: countText };
// }
