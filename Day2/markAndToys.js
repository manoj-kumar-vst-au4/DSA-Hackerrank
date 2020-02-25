function maximumToys(prices, k) {
    let count = 0;
    let sorted = prices.sort((a, b)=> a-b);
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] <= k){
            k-= sorted[i];
            count++;
        }
    }
    return count;

}