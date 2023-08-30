"use strict";
const a = "Anil";
console.log(a);
let str = "";
let n = 5;
for (let row = 0; row <= n; row++) {
    for (let space = 0; space < n - row; space++) {
        str += " ";
    }
    for (let col = 0; col <= row; col++) {
        str += "* ";
    }
    str += "\n";
}
console.log(str);
