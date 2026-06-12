const userEmail = "k@raj.ai"
if (userEmail) {
    console.log("You have an email")
}
else{
    console.log("Please provide an email")
}

// falsy values: false, 0, "", null, undefined, NaN, -0, BigInt 0n, document.all

// truthy values: all values that are not falsy, "0", "false"," ", [], {}, function() {}, etc.

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("This is a truthy value")
}


// nullish coalescing operator (??)
const userName = null
const defaultName = "Guest"
const nameToDisplay = userName ?? defaultName
console.log(nameToDisplay)

// ternary operator ?? true : false 
const age = 20
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote"
console.log(canVote)