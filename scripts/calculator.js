let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
displayCalculation();

function updateCalculation (button_value) {
    calculation += button_value;
    displayCalculation()
    saveCalculation();
}

function saveCalculation () {
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

function displayCalculation() {
    document.querySelector('.js-calculatorDisplay')
        .innerText = calculation;
}