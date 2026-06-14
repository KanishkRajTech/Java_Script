

const arr = [1, 2, 3, 4, 5];

for( const number of arr) {
    console.log(number);
}


const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('JP', 'Japan');

for( const [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`);
}
