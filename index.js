function isPrime(input){
  
  for(var i=0; i<input.length; i++){
   if(input[i] != 1){ 
      if(input[i] % 2==0 || input[i] % 3==0){
        document.write(input[i] + "<br>Not Prime<br>")
      }else{
        document.write(input[i] + "<br>Prime<br>")
      }
  }else{
    document.write(input[i]+ "<br> Not Prime <br>");
  }
  }
}
isPrime([1,12,5,7]);

//Your code will not work with 35,169,121,... You only check with 2 and 3
