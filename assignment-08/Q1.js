// Q1 – Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return totalMarks / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

// Test for three students.
const students = [
    new Student("Rahul", [85, 90, 78]),
    new Student("Aman", [65, 70, 62]),
    new Student("Riya", [35, 42, 30])
];

students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Average: ${student.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("--------------------");
});
