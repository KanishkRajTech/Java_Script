
const myNums = [1,2,3,4,5,6,7,8,9,10]

const myTotal  = myNums.reduce(function (acc, current) {
    return acc + current
},0)
console.log(myTotal)//55

const myTotals = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(myTotals) // 55