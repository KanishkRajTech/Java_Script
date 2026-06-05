const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "kanishk"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("name"))
const anotherUser ={
    email: "kanishk@gmail.com",
    fullname:{
        userfullname:{
            firstname: "kanishk",
            lastname: "raj"
        }
    }
}

console.log(anotherUser.fullname.userfullname.firstname)


const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }

const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
console.log(obj3)


const users = [
    {
        userId: 1, 
        name: "kanishk",
        email: "kanishk@gmail.com"
    }
]
// users[1].email

