// function first() {
//     //hjkl
//     setTimeout( function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }


// first();
// second();

// function done() {
//     console.log("------next------>");
// }

// function learnJS(laern, callbeck) {
//     console.log("js? -" + laern);
//     callbeck();
// }

// learnJS("JavaScript", done);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;
// console.log(options);

// for( let key in options){
//     console.log(key + ' : ' + options[key]);
// }

// console.log(Object.keys(options).length);


// arr.pop();
// arr.push("5");

// arr.shift();
// arr.unshift("1");


// for (let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// };
 
// let arr = ["first", 2, 3, 4, "five"];
// arr.forEach(function (item, i, mass){
//     console.log(i + ': ' + item + '{massiv: ' + mass + '}');

// });


// let mass = [1, 2, 6, 4, 5];

// for (let key of mass){
//     console.log(key);
// };

// console.log(arr);


let ans = prompt('', ''),
    arr = [];

arr = ans.split(',');


let arr = ['aaa', 'bbb', 'ccc', 'dddd'],
    i = arr.join(', ');
console.log(i);

let arr = [1, 15, 55, 3],
    i = arr.sort(so);
console.log(i);

function so(a,b) {
    return a-b;
}

let soldier = {
    health: 400,
    armor: 100
};

let jhon = {
    health: 200
};

jhon.__proto__ = soldier;


console.log(jhon.armor);
