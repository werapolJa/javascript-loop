// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here

console.log(minScore);
for (let i = 0; i <= scores.length; i++) {
  if (scores[i] < minScore) {
    minScore = scores[i];
  }
}

console.log("คะแนนสอบที่น้อยที่สุดของนักเรียนในห้องหนึ่งคือ " + minScore);



// for (let i = 0; i <= scores.length; i++) {
//   if (scores[i] < minScore) {
//     minScore = scores[i];
//   }
// }
// console.log(minScore);