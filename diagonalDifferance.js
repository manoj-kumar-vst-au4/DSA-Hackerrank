 const diagonalDifferance = (arr) =>{
    let primaryDiag = 0
    let secondaryDiag = 0
    let length = arr.length;
    
    for (var i = 0, indexLength = length - 1; i < length; i++) {
        primaryDiag += arr[i][i]
        secondaryDiag += arr[i][indexLength]
        indexLength -= 1 
    }
    
    return Math.abs(primaryDiag - secondaryDiag)
}

let array = [[11, 2, 4],[4, 5, 6],[10, 8, -12]]
console.log(diagonalDifferance(array));