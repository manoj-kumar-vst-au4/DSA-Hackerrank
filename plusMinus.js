function plusMinus(arr) {
    var sorted = arr.sort((a,b) => a-b);
    var positive = 0;
    var negative = 0;
    var zero = 0;
    for(let i = 0 ; i < sorted.length; i++){
        if(sorted[i] > 0){
            positive++;
        }
        else if(sorted[i] < 0){
            negative++;
        }
        else{
            zero++;
        }
    }
    console.log(parseFloat(positive/sorted.length))
    console.log(parseFloat(negative/sorted.length))
    console.log(parseFloat(zero/sorted.length)) 

}

let array = [-4, 3, -9, 0, 4, 1 ];
console.log(plusMinus(array));