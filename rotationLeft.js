'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});
function readLine() {
    return inputString[currentLine++];
}


function rotLeft(a, d) {
    var resultArr = [];
    for (var i = 0; i < a.length; i++) {
        resultArr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        resultArr.shift(resultArr.push(resultArr[0]));
    }
    return resultArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = rotLeft(a, d);
    ws.write(result.join(' ') + '\n');
    ws.end();
}