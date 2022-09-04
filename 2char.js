function solution(arr){
    var i = 0;
    var res = []
    
    if(arr.length % 2 !== 0) {
        arr += '_'
    }
    while(i<arr.length){
      res.push(arr[i] + arr[i+1])
      i += 2;
    }
 
   return res;
 }

 console.log(solution('aBcD'))
 console.log(solution('aBc'))