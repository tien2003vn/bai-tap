function div10(x) {
    var t,k;
    t = x % 10;
    if(t<5){
        k= x - t;
        return k;
    }
    if(t>=5){
        k=x + 10-t;
        return k;
    }
}
console.log(div10(23));
console.log(div10(25));
console.log(div10(37));


