
const user = Symbol("user");
const JsUser = {
    name: "Kanishk Raj",
    age: 21,
    [user]: user,
    city: "Katihar, Bihar"
};

console.log(JsUser.name); 
console.log(JsUser.age);
console.log(JsUser[user]);
console.log(JsUser["city"]);

JsUser.name = "Kanishk";
console.log(JsUser.name); // Kanishk

// Object.freeze(JsUser);
JsUser.name = "Raj";
console.log(JsUser.name); // Kanishk

JsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(JsUser.greeting);  // [Function: (anonymous)]
console.log(JsUser.greeting()); // Hello, my name is Kanishk and I am 21 years old


