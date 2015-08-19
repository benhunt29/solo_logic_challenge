//Question 1

function addArray(array1,array2){
	combinedArray = [];
	
	for(var i = 0;i < array1.length; i++){
		combinedArray[i] = array1[i]+array2[array1.length - i -1];
	};

	return combinedArray;
}

var primes=[2,3,5,7,11,13,17,19];
var nonPrimes=[1,4,6,8,9,10,12,14];

var test = addArray(primes,nonPrimes);
console.log(test);