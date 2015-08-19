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

var test1 = addArray(primes,nonPrimes);
console.log(test1);

//Question 2

function comparison(input1, input2){
	if(input1 > input2){
		return 1;
	}else if(input1 < input2){
		return -1;
	}else{
		return 0;
	}
};

function addArraysInOrder(array1, array2){
	var combinedArray = [];
	array1.sort(comparison);
	array2.sort(comparison);
	
	for(var i = 0;i < array1.length; i++){
		combinedArray[i] = array1[i]+array2[i];
	};

	return combinedArray;
}

var numbers1=[4,1,6,5,8];
var numbers2=[7,3,2,9,10];
test2 = addArraysInOrder(numbers1,numbers2);
console.log(test2);