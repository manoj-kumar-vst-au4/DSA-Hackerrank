function staircase(n) {
    let a = "#";
    let b = " ";
    for(i=1; i<=n; i++){
		console.log(b.repeat(n-i)+""+a.repeat(i));
	}

}

staircase(6);