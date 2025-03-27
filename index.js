//Exercise 1  

function guessNumberGame(){
  let randomNumber = Math.floor(Math.random()*10+1);
  let number;

  while (number !== randomNumber) {
    number = Number(prompt("Guess a number between 1 and 10:"))

    if (number > randomNumber){
      alert("the guess is too high")
    } 
    else if (number < randomNumber){
      alert("the guess is too low")
    } 
  
    else {
      alert("Correct!");
    }
  }
}




//Exercise 2 Create an array of random numbers 



function generateRandomArray(length){
  
  let arr = [];
  
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random()*100+1);
    arr.push(randomNumber);
  }
  return arr;
}

function startRandomArray() {
  let randomNumber = generateRandomArray(10);  
  alert(randomNumber);  
}



// EXERCISE 3: Calculate the sum of even numbers in the array 


function sumEvenNumbers() {

  let evenNumber =[];
  let sum = 0;
  
  let arr = prompt("Please enter numbers separated by commas, e.g., 1,2,3,4,5,6").split(",").map(Number);


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }

  alert(sum);
}

