function birthdayCakeCandles(ar) {
    let count = 0;
    let sortedAr = ar.sort((a, b)=> a-b);
    let length = sortedAr.length;
    for(let i = 0; i < length; i++){
        if(sortedAr[length - 1] === sortedAr[i]){
            count++;
        }
    }
    return  count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))