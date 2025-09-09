
console.log("Please inpt student marks")
let studentMark;

if (studentMark < 0 && studentMark > 100) {
  console.log("Invalid marks");
} else if (studentMark >= 0 && studentMark < 40) {
  console.log("Grade F");
} else if (studentMark >= 40 && studentMark <= 49) {
  console.log("Grade D");
} else if (studentMark > 49 && studentMark <= 59) {
  console.log("Grade C");
} else if (studentMark > 60 && studentMark <= 79) {
  console.log("Grade B");
} else if (studentMark > 79 && studentMark <= 100) {
  console.log("Grade A");
}
