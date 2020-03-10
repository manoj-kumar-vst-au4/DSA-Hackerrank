function repeatedString(s, n, target) {
    const countA = s => s.split(target).length-1 ;

    let length = s.length;
  
    let reps = Math.floor(n / length);
    
    let remainder = s.slice(0, n % length);
    
    return reps * countA(s) + countA(remainder);
}
let string = "aba";
let num = 10;

console.log(repeatedString(string, num, "a"));
 