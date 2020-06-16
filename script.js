let colors = ['red', 'purple', 'blue', 'green', 'black']
let hasManyColors = false;
if (colors.length < 3){console.log ('false')}
else {console.log('true')}

let printNumbers = 11; 
undefined
for (let i = 0; i < printNumbers; i++) {
    console.log(i)}
//0-10ig a számok 
 
colors = ['red', 'purple', 'blue', 'green', 'black'];
colors.forEach(color => {console.log(color);})
//egyenként listázza a színeket

//`

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number);
});