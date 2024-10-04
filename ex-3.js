// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];

let minScore = studentScores[0];
// Start coding here

// สมมุติว่าเรามี Variable ตั้งต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนห้องหนึ่ง ดังนี้ [100, 20, 3, 100]

// ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้องหนึ่ง

// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

for (let index = 0; index < studentScores.length; index++) {
  console.log(studentScores[index]);
  if (minScore > studentScores[index]) {
    minScore = studentScores[index];
  }
}

console.log(minScore);
