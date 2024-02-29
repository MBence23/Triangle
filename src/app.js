/*
File: app.js
Author: Molnár Bence
Copyright: 2024, Molnár Bence
Group: Szoft I-1-N
Date: 2024-02-29
Github: https://github.com/molnárbence/
Licenc: GNU GPL
*/


const baseInput = document.querySelector("#base")
const heightInput = document.querySelector("#height")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {
    startCalc();
});

function startCalc() {
    // const base = 
    const base = Number(baseInput.value)
    const height = Number(heightInput.value)
    const area = calcArea(base, height)
    console.log("Terület", area)
    areaInput.value = area //Alulra is kiirja
}
 
// Terület számítás
function calcArea(base, height) {
    return base * height /2;
}

