function sockMerchant(n, ar) {
    let sortedArr = ar.sort((a,b)=> a-b);
    let sockPairs = 0;
    for(let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i]=== sortedArr[i+1]){
            sockPairs++;
            i+=1;
        }
    }
return sockPairs;
}