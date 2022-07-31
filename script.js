//Next Steps:
//Set operator variable on symbol press
//Set numberB AFTER symbol press
//Trigger operate fucntions on equals press using a, b, and operator variables


let numberA = 0;
let numberB = 0;
let currentOperator = "";
displayText = document.getElementById("display-text");
displayText.innerText = "0";
buttons = Array.from(document.getElementsByTagName("button"));

let debugArea=document.getElementById("debug");

let intervalId = window.setInterval(function(){
    debugArea.innerText=(`numberA = ${numberA}
    numberB = ${numberB}
    currentOperator = ${currentOperator}`);
    /// call your function here
  }, 500);



//Keyboard Stuff

//Display and set numberA value
document.addEventListener("keyup",(e)=> {
    console.log(e.key);

    if (displayText.innerText === "0"){
        displayText.innerText = ""
    }

    if (displayText.innerText.length > 17){
        return;
    }

    if (e.key >=0 &&  e.key <=9){
    
    
    displayText.innerText += e.key;
    numberA = parseInt(displayText.innerText);
    console.log(`numberA is ${numberA}`);
    
}})

//Clear display, numberA, numberB & currentOperator

document.addEventListener("keyup",(e)=> {
        if (e.key==="Delete"){clearAll();
        }
    } )   


////////////////////////////////////////////////////////////////

//Mouse Stuff
buttons.forEach(button => {    
    button.addEventListener("click",() =>{
        displaySetA(button);
    } )   
});

//Display and set numberA value
function displaySetA(button){if (button.classList.contains("number")){
    if (displayText.innerText === "0"){
        displayText.innerText = ""
    }

    if (displayText.innerText.length > 17){
        return;
    }

   displayText.innerText += button.textContent;
   numberA = parseInt(displayText.innerText);
   console.log(`numberA is ${numberA}`);
}

}


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
}


    


function add(num1,num2){
console.log(`The answer is ${num1 + num2}`);
}
function subtract(num1,num2){
console.log(`The answer is ${num1 - num2}`)
}

function multiply(num1,num2){
console.log(`The answer is ${num1 * num2}`)
}

function divide(num1,num2){
console.log(`The answer is ${num1 / num2}`)
}


function operate(operator,num1,num2){

    if (operator === "+"){
        add(num1,num2);
    }

    else if (operator  === "-"){
        subtract(num1,num2);
    }

    else if (operator  === "*"){
        multiply(num1,num2);
    }

    else if (operator  === "/"){
        divide(num1,num2);
    }

    else return;

}