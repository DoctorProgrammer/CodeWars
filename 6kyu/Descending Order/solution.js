function descendingOrder(n){
    // split a number in each digit
    let arr = n.toString().split("");
    arr = sort(arr)
}

function sort(array) {
    while(sorted(array)) {
        // todo
    }
    return array
}

function sorted(array) {
    let bool = true;
    for(i = 0; i <= array.length; i++) {
        if(!array[i] >= array[i+1]) {
            bool = false;
        }
    }
    return bool
}

console.log(descendingOrder(10034))