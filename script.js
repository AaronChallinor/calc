//Critical
//NumberB can't be more than one digit long. Find out issue and fix.


//Done

//Fix the 0 being required in the display after operator setting. (DONE)
//Enable operations on the final result and onwards. i.e result becomes number A again. (DONE)


//Nice to haves:
//Implement a backspace for the numbers
//Display numberA somewhere when typing number B -See debug section
//Display the operator somewhere when assigned.-See debug section
//Fix the random zeroing out of numberA & numberB on Enter sometimes 




let numberA = 0;
let numberB = 0;
let currentOperator = "";
let currentNumber = 1;
let displayText = document.getElementById("display-text");
displayText.innerText = "0";
buttons = Array.from(document.getElementsByTagName("button"));
let result = "";
let doNotUpdate = 0;

let debugArea=document.getElementById("debug");

let intervalId = window.setInterval(function(){
    debugArea.innerText=(`numberA is ${numberA}
    numberB is ${numberB}
    currentOperator is ${currentOperator}
    currentNumber is ${currentNumber}
    doNotUpdate is ${doNotUpdate}
    result is ${result}
    
    `);
    /// call your function here
  }, 500);



//Keyboard Stuff

//Display and set numberA value
document.addEventListener("keyup",(e)=> {
    
    //Remove placeholder 0 when you start typing.
    if (displayText.innerText === "0"){
        displayText.innerText = ""
    }
    //Do nothing if the display length has reached 17 characters
    if (displayText.innerText.length > 17){
        return;
    }
    
    if(currentNumber === 1){
    //If you're pressing Button 1 to 9 on keypad...
    if (e.key >=0 &&  e.key <=9){
    //Add that number to the screen
    displayText.innerText += e.key;
    //Parse the display value string into the numberA variable.    
    numberA = parseInt(displayText.innerText);}
    
    }
    
    if(currentNumber === 2){  
    //If you're pressing Button 1 to 9 on keypad...
    if (e.key >=0 &&  e.key <=9){
        displayText.innerText = "";
        doNotUpdate = 0;
    //Add that number to the screen
    if (doNotUpdate === 0){
    displayText.innerText += e.key;}
    //Parse the display value string into the numberB variable.  
    numberB = parseInt(displayText.innerText);}}


// if (e.key ==="/"){ currentOperator = "/"; currentNumber = 2;displayText.innerText ="0";}
// if (e.key ==="*"){ currentOperator = "x"; currentNumber = 2;displayText.innerText ="0";}
// if (e.key ==="-"){ currentOperator = "-"; currentNumber = 2;displayText.innerText ="0";}
// if (e.key === "+"){ currentOperator = "+"; currentNumber = 2;displayText.innerText ="0";}


if (e.key ==="/"){ currentOperator = "/"; currentNumber = 2; doNotUpdate = 1;}
if (e.key ==="*"){ currentOperator = "x"; currentNumber = 2; doNotUpdate = 1;}
if (e.key ==="-"){ currentOperator = "-"; currentNumber = 2; doNotUpdate = 1;}
if (e.key === "+"){ currentOperator = "+"; currentNumber = 2; doNotUpdate = 1;}




if (e.key === "Enter"){ 
    operate(currentOperator,numberA,numberB);
    displayText.innerText = result;
    numberA = result;
    console.log(currentOperator);
    console.log(numberA);
    console.log(numberB);
}
})



//Clear display, numberA, numberB & currentOperator

document.addEventListener("keyup",(e)=> {
        if (e.key==="Delete"){clearAll();
        }
    } )   


////////////////////////////////////////////////////////////////

//Mouse Stuff
buttons.forEach(button => {    
    button.addEventListener("click",() =>{
        //Clear the placeholder zero to prevent inclusion
        if (displayText.innerText === "0"){
            displayText.innerText = ""
        }
        //Prevent the numbers from going off the display
        if (displayText.innerText.length > 17){
            return;
        }

        if(currentNumber === 1){

        if (button.classList.contains("number")){
  
            displayText.innerText += button.textContent;
            numberA = parseInt(displayText.innerText);
            
         }
        }

        if(currentNumber === 2){





            if (button.classList.contains("number")){
                displayText.innerText = "";
                doNotUpdate = 0;
                if(doNotUpdate === 0){
                displayText.innerText += button.textContent;}
                numberB = parseInt(displayText.innerText);
                
             }
            }
    




         if (button.classList.contains("operator")){
  
            currentOperator = button.textContent;
            currentNumber = 2;
            // displayText.innerText ="0";
            doNotUpdate = 1;
            
         }




         if (button.classList.contains("equals")){
            operate(currentOperator,numberA,numberB);
            displayText.innerText = result;
            numberA = result;
        }






         else return;
    
    } )   
});





//Clear display, numberA, numberB & currentOperator
buttons.forEach(button => {    
    button.addEventListener("click",() =>{
        if (button.id==="clear"){clearAll();   
        }
    } )   
});

function clearAll(){

    displayText.innerText ="0";
    numberA = "0";
    numberB = "0";
    currentOperator = "";
    currentNumber = 1;
    result = "";
}


    


function add(num1,num2){
console.log(`The answer is ${num1 + num2}`);
result= `${num1 + num2}`;
}
function subtract(num1,num2){
console.log(`The answer is ${num1 - num2}`);
result= `${num1 - num2}`;
}

function multiply(num1,num2){
console.log(`The answer is ${num1 * num2}`);
result= `${num1 * num2}`;
}

function divide(num1,num2){
console.log(`The answer is ${num1 / num2}`);
result= `${num1 / num2}`;
}


function operate(currentOperator,numberA,numberB){

    if (currentOperator === "+"){
        add(numberA,numberB);
    }

    else if (currentOperator  === "-"){
        subtract(numberA,numberB);
    }

    else if (currentOperator  === "x"){
        multiply(numberA,numberB);
    }

    else if (currentOperator  === "/"){
        divide(numberA,numberB);
    }

    else return;

}