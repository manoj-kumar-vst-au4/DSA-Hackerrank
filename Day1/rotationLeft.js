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