function TuDaiNhat([s])
{
 var i,j,n,m,dem,max=0;
 for(i=0;i<s.length;i++)
 {
  if(s[i]!=' ')
  {
   dem=1;
   j=i+1;
  }
  while(s[j]!=' '&&j<s.length){
  dem++;
  if(dem>max)
  {
   max=dem;
   n=i;
   m=j;
  }
  j++;
  }
 }
 
 for(var i=n;i<=m;i++){
 console.log(s[i]);
 }
 
}

console.log(TuDaiNhat(['day la tu dai nhat: nghieng']))