function isPrime(input){
  
  for(var j=0; j<input.length; j++){
    
    var prime = true;
	    
    if (input[j] == 1){
     prime = false;
    }
 
    document.write(input[j]+" ");
 
    for(var i=2; i<=Math.sqrt(input[j]); i++){
   
    if (input[j]%i == 0)
      
      prime = false;
    }
   document.write(prime+"<br>");
  }
}
isPrime([35,230,77,11]);