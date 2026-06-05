const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh choudhary"
}

const { courseName, price, courseInstructor: instructor } = course;
console.log(instructor);

const navbar = ({ company}) => {

}

navbar({ company ="amazon" });