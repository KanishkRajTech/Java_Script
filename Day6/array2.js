const marval_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

const dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// // marval_heroes.push(dc_heroes);
// console.log(marval_heroes);
// console.log(marval_heroes[6][2]);

// const all_heroes = marval_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_heroes = [...marval_heroes, ...dc_heroes];
console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, [13, 14, 15]]];
const flat_array = another_array.flat(Infinity);
console.log(flat_array);

console.log(Array.isArray("Kanishk")); // false
console.log(Array.from("Kanishk")); // ['K', 'a', 'n', 'i', 's', 'h', 'k']

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]