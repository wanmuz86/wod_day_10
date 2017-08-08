var arr = [3,12,5,7,151,73,155];
	for(i = 0; i < arr.length; i++){
		
		//This is not a O(/n) solution.. You making it worst to become O(n2) :(
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

