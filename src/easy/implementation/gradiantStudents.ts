const GRADES = [73, 67, 38, 33];

class GradingStudents {
  constructor(private grades: number[]) {}

  execute() {
    return this.grades.map((grade) => {
      let roundedGrade = grade;

      while (roundedGrade % 5 !== 0) {
        roundedGrade += 1;
      }

      const fallingGrade = 40;

      const isFallingGrade = roundedGrade < fallingGrade;

      if (isFallingGrade) return grade;

      if (roundedGrade - grade < 3) return roundedGrade;
      else return grade;
    });
  }
}

const gradingStudents = new GradingStudents(GRADES);
console.log(gradingStudents.execute());
