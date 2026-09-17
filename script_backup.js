let first_number
let operator
let second_number

// uses the display content
let display = window.document.getElementById('display')

//---------------------------fetches-the-first-number-and-puts-on-display-------------------

//function to change the display innerText´s
function num_click(event) { //event uses information from the click event
    let first_number_value = event.target.innerText;  //fetch the Text from the click event 
    display.innerText += first_number_value // gives to display the text from the event
    first_number = display.innerText
}

const num_buttons = window.document.querySelectorAll('.num_button')//fetch the num buttons only

num_buttons.forEach(button => { // uses the const with all buttons 
    button.addEventListener('click', num_click); //each button has a eventlistener now
})

//-----------------------fetches-the-operator-and-puts-on-display------------------------------

function operation_click(event) {
    const operator_value = event.target.innerText
    display.innerText = operator_value
    operator = display.innerText
} 

const operation_buttons = window.document.querySelectorAll('.operation_button') //fetch operation buttons

operation_buttons.forEach(button => {
    button.addEventListener('click', operation_click)
})

//----------------------------------------------------------------------------------------------


function res() {
    alert(first_number)
    alert(operator)
}