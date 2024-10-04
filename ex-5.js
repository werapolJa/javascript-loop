// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

for (const key in companyName) {
  console.log(
    "Number" +
      " " +
      (Number(key) + 1) +
      " " +
      "character" +
      " " +
      companyName[key]
  );
}

// const we = () => {
//   for (const key in companyName) {
//     console.log(`${+key + 1} ${companyName[key]}`);
//   }
// };
// we();
