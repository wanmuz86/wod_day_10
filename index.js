function isPrime(input){
  
  for(var j=0; j<input.length; j++){
    
    var prime = true;
	    
    if (input[j] == 1){
     prime = false;
    }
 
    document.write(input[j]+" ");
 
    for(var i=2; i<=Math.sqrt(input[j]); i++){
   // Currently your code is O(/n) .. Eg: If the number is 100, it will take 10 round to do verification..
	    
	    //Check if you can revise it so that only take half round to do it..
    if (input[j]%i == 0)
      
      prime = false;
    }
   document.write(prime+"<br>");
  }
}
isPrime([35,230,77,11]);
