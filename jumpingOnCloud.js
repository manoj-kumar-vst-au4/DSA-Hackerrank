function jumpingOnClouds(c) {
    let jumps = 0;
    let  i = 0;
    while (i < c.length - 1) {
        if((i + 2 < c.length) && c[i + 2] != 1) {
            i += 2;
        } else {
            i += 1;
        }
        jumps += 1;
    }
    return jumps;

}
