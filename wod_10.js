var arr = [3,12,5,7,151,73,155];
	for(i = 0; i < arr.length; i++){
		var isPrime = true;
		for(j = 2; j < arr[i]; j++){
			if(arr[i] % j === 0){
				isPrime = false;
				break;
			} 
		}
		if(isPrime){		
			console.log('Prime')
		} else {	
			console.log('Not Prime')
			isPrime = true;					
		}	
	}

