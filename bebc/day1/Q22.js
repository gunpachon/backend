const score = parseFloat(prompt("Enter your score (0-100):"));
let grade;

if (score >= 90) {
  grade = '4';
} else if (score >= 80) {
  grade = '3';
} else if (score >= 70) {
  grade = '2';
} else if (score >= 60) {
  grade = '1';
} else if (score > 100 | score <0){
  console.log("Error");
}
else {
  grade = '0';
}

alert(`Your grade is: ${grade}`);
