function toCamelCase(str){
    let arr = str.split(/[-_]/g);
    let returnedString = arr[0];
    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        returnedString += arr[i];
    }
    return returnedString;
}

console.log(toCamelCase("the_stealth_warrior"))