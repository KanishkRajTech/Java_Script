function addTwoNumbers(a, b) {
    // console.log(a + b);
        return a + b;
}

const result = addTwoNumbers(5, 10); 
console.log(result);



function loginUserMessage(username) {
    if (!username) {
        return "please provide a username";
    }
    return `welcome back ${username}`;
}
const message = loginUserMessage();
console.log(message);