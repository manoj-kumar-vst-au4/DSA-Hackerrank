let arr = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
    ];

    function getCount(objects) {
        let count = 0;
        objects.map( object =>{
            if(object.x === object.y){
                count++;
            }
        })
        return count;
    }

    console.log(getCount(arr));