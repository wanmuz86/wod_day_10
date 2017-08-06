function primeInput(n){
  for (var i = 0; i < n.length; i++){
  if(n[i] % 2 == 0  || n[i] % 3 == 0){
    document.write(n[i]+" divisible by <br>");
    for(var j = 2; j < n[i]; j++){
      if(n[i] % j == 0){
        document.write(j+",");
      }
    }document.write("<br>");
    
  }else{
    document.write(n[i]+"<br>Prime <br>");
  }
 } 
}
primeInput([529,40,31]);