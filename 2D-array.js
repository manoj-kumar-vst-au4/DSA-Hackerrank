function hourglassSum(arr) {
    let result = 0; 
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            sum += arr[i+1][j+1];
            sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            if (result <= sum)
            {
                result = sum;
            }
        }
    }   
    return result;
}