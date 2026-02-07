function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let voteCount = { ha: 0, na: 0 };
  for (const item of array) {
    if (item !== "ha" && item !== "na") {
      return "Invalid";
    }
    voteCount[item]++;
  }

  if (voteCount["ha"] > voteCount["na"]) {
    return true;
  } else if (voteCount["ha"] < voteCount["na"]) {
    return false;
  } else {
    return "equal";
  }
}

const result = gonoVote(["ha", "na", "na", "ha", "ha"]);
console.log(result);

// system 2
// function gonoVote(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }

//   let voteCount = { ha: 0, na:0 };
//   for (const item of array) {
//     if (item !== "ha" && item !== "na") {
//       return "Invalid";
//     }
//     // voteCount[item]++;
//     if (voteCount[item]) {
//       voteCount[item]++;
//     } else {
//       voteCount[item] = 1;
//     }
//   }

//   if (voteCount["ha"] > voteCount["na"]) {
//     return true;
//   } else if (voteCount["ha"] < voteCount["na"]) {
//     return false;
//   } else {
//     return "equal";
//   }
// }

// system 3
// function gonoVote(array) {
//   // 1️⃣ Validate input is array
//   if (!Array.isArray(array)) return "Invalid";

//   // 2️⃣ Initialize vote counts
//   let voteCount = { ha: 0, na: 0 };

//   // 3️⃣ Loop through each vote
//   for (const item of array) {
//     // 3a️⃣ Normalize to lowercase
//     let normalizedItem = item.toLowerCase();

//     // 3b️⃣ Check if valid vote
//     if (normalizedItem !== "ha" && normalizedItem !== "na") {
//       return "Invalid"; // any invalid vote
//     }

//     // 3c️⃣ Count votes
//     voteCount[normalizedItem]++;
//   }

//   // 4️⃣ Compare counts
//   if (voteCount["ha"] > voteCount["na"]) return true;
//   else if (voteCount["ha"] < voteCount["na"]) return false;
//   else return "equal"; // tie
// }

// system 4

// function gonoVote(array) {
//   // 1️⃣ Validate input
//   if (!Array.isArray(array)) return "Invalid";

//   // 2️⃣ Initialize counts
//   let haCount = 0;
//   let naCount = 0;

//   // 3️⃣ Loop through each vote
//   for (const item of array) {
//     // 3a️ Strict lowercase check
//     if (item !== "ha" && item !== "na") {
//       return "Invalid"; // any invalid vote or case
//     }

//     // 3b️ Count votes
//     if (item === "ha") haCount++;
//     else if (item === "na") naCount++;
//   }

//   // 4️⃣ Compare counts
//   if (haCount > naCount) return true;
//   else if (haCount < naCount) return false;
//   else return "equal"; // tie
// }
