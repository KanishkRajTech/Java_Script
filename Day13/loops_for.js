// for
const arr = [1, 2, 3, 4, 5];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for(let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[index] + arr[j]);
    }   
}

for(let index =0; index < 20; index++) {
    if(index == 5) {
        break;
    }
    console.log(index);
}


for(let index =0; index < 20; index++) {
    if(index == 5) {
        continue;
    }
    console.log(index);
}