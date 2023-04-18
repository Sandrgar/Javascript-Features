function sum(...values) {
    let total=0;
    for(let i in values){
         total = total + values[i]

    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5,));