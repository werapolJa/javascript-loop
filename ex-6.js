// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

console.log(reversedCompanyName);

// for (let index = companyName.length - 1; index >= 0; index--) {
//   reversedCompanyName += companyName[index];
// }

for (let index = 0; index < companyName.length; index++) {
    reversedCompanyName  = companyName[index] + reversedCompanyName

}

console.log(reversedCompanyName);

// นี่คือแบบฝึกหัด for loop แบบยาก จำนวน 2 ข้อ:
