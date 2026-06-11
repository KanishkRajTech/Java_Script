// Immediatly invoked function expression (IIFE)

(function() {
    console.log("This is an IIFE");
})();


( (name) => {
    console.log(`Hello, ${name}`);
})('Alice');