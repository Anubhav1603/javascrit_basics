// Calculate the grade of a student based on marks.

const grade = (marks) => {
  if (marks >= 90) {
    return "A";
  } else if (marks <= 89 && marks >= 70) {
    return "B";
  } else if (marks <= 69 && marks >= 30) {
    return "C";
  } else {
    return "F";
  }
};
console.log(grade(99));
