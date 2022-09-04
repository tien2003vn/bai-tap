function sevenBoom(a){
    var j;
    for(var i = 0; i < a.length; i++){
        if(a[i] == 7){
            console.log("Boom!");
            break;
        }
        else{
                if(a[i]%10 == 7){
                        console.log("Boom!");
                        break;
                }
                else {
                        console.log("Ko tim thay so 7");
                        continue;
                }
                
            
        
        }
    }
}
console.log(sevenBoom([7,7,9,10]))
console.log('           ')
console.log(sevenBoom([8,8,9,10]))
console.log('           ')
console.log(sevenBoom([87,8,9,10]))
console.log('           ')
console.log(sevenBoom([8,67,9,10]))
console.log('           ')
