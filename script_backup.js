let first_number =''
let operator = undefined
let second_number =''


// uses the display content
let display = window.document.getElementById('display')

//---------------------fetches-the-first-and-second-number-and-puts-on-display-------------

//function to change the display innerText´s and define variables
function num_click(event) {
    let number_value = event.target.innerText  
        if (operator == undefined) {
            first_number += number_value
            display.innerText = first_number
        } else {
            second_number += number_value
            display.innerText = second_number
        }
        
}

const num_buttons = window.document.querySelectorAll('.num_button')//fetch the num buttons only

num_buttons.forEach(button => { // uses the const with all buttons 
    button.addEventListener('click', num_click); //each button has a eventlistener now
})

//-----------------------fetches-the-operator-and-puts-on-display--------------------------

function operation_click(event) {
    const operator_value = event.target.innerText
    display.innerText = operator_value
    operator = display.innerText
} 

const operation_buttons = window.document.querySelectorAll('.operation_button') //fetch operation buttons

operation_buttons.forEach(button => {
    button.addEventListener('click', operation_click)
})

//-----------------------------------------------------------------------------------------

const equal_button = window.document.getElementById('button_equal') // fetch equal button

equal_button.addEventListener('click', res) 

function reset_status () {
    operator = undefined
    first_number = ''
    second_number = ''
}

function res() {
    let parsed_first_number = parseFloat(first_number)
    let parsed_second_number = parseFloat(second_number)
    let result = undefined 
    switch(operator) {
        case '+':
            result = parsed_first_number + parsed_second_number
            display.innerText = result
            reset_status()
            break
        case '-':
            result = parsed_first_number - parsed_second_number
            display.innerText = result
            reset_status()
            break
        case 'X':
            result = parsed_first_number * parsed_second_number
            display.innerText = result
            reset_status()
            break
        case '/':
            result = parsed_first_number/parsed_second_number
            display.innerText = result
            reset_status()
            break
    }    
}


