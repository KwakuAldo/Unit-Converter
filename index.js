/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById('inputEl');
let convert = document.getElementById('convertBtn');
let output = document.getElementsByClassName('outputEl');

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convert.addEventListener('click', function () {
    let inputValue = input.value;
    //Calculate the Unit of Measure and give results
    output[0].textContent = `${inputValue} meter = ${(inputValue * meterToFeet).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(3)} meter`;
    output[1].textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / kilogramToPound).toFixed(3)} liters`;
    output[2].textContent = `${inputValue} kilograms = ${(inputValue * kilogramToPound).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kilogramToPound).toFixed(3)} kilograms`;
});