// Exercise #1: Decrease the Student Scores
let studentScores = [89, 70, 60, 50, 100, 71];

// Start coding here

// วันหนึ่งครูได้ออกมาประกาศว่า ครูตรวจข้อสอบผิดไป 1 ข้อ
// โดยเป็นข้อที่ทุกคนทำผิดหมดทุกคนเลย แต่ครูดันให้เป็นถูก ซึ่งข้อนี้มีคะแนน 10 คะแนน
// ดังนั้นครูจะหักคะแนนของทุกคนในชั้นเรียนนี้ออกมาทั้งหมด 10 คะแนน จากคะแนนที่ได้ทั้งหมด
// ให้เขียนโปรแกรมในการหักคะแนนของนักเรียนชั้นนี้ออกมาคนละ 10 คะแนน
let studentScoresNew = [];

for (let index = 0; index < studentScores.length; index++) {
  //   console.log(studentScores[index] + 10);
  studentScoresNew.push(studentScores[index] - 10);
}
console.log(studentScoresNew);
