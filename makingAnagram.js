function makingAnagrams(s1, s2) {
    var count=0;
    let n=s1.length;
    let m=s2.length;
    for(let i=0;i<n;i++)
    {
        s2.includes(s1[i]) ? s2=s2.replace(s1[i],"") : count++;
    }
    return (m-(n-count))+count;
    
}

let st1="abc";
let st2 = "cdc";
console.log(makingAnagrams(st1, st2));

