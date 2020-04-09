function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let array = [];
    for(let i = 0; i<3; i++){
        if(a[i] > b[i]){
            alice++;
        }
        if(b[i] > a[i]){
            bob++;
        }
    }

    array.push(alice);
    array.push(bob);

return array;    

}
