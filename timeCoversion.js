function timeConversion(s) {
    const array = s.slice(0, 8).split(":");
        array[0] = (s.indexOf("PM") > -1 ) ?
        (array[0] == 12 ? "12" :(parseInt(array[0])+ parseInt(12))) :
        (array[0] ==12? "00": array[0]);
    
    return array.join(":");
}

console.log(timeConversion("12:05:45PM"));
