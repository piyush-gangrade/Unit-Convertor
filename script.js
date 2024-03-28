const inputValue = document.getElementById("input");
const convertBtn = document.getElementById("btn");
const lnth = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

let units = [
    {
        firstUnit: "meters",
        secondUnit: "feets",
        firstCovertValue: 3.28084,
        secondCovertValue: 0.3048
    },
    {
        firstUnit: "liters",
        secondUnit: "gallons",
        firstCovertValue: 0.264172,
        secondCovertValue: 3.78541
    },
    {
        firstUnit: "kilos",
        convertTo: "pounds",
        firstCovertValue: 2.20462,
        secondCovertValue: 0.453592
    }
]

function unitConverter(value, arr, i){
    let firstCovertion = (Number(value)*arr[i].firstCovertValue).toFixed(3);
    let secondCovertion = (Number(value)*arr[i].secondCovertValue).toFixed(3);
    let sentence = `${value} ${arr[i].firstUnit} = ${firstCovertion} ${arr[i].secondUnit} | ${value} ${arr[i].secondUnit} = ${secondCovertion} ${arr[i].firstUnit}`;
    return sentence;
}

convertBtn.addEventListener("click", ()=>{
    let unit = inputValue.value;
    lnth.textContent = unitConverter(unit, units, 0);
    volume.textContent = unitConverter(unit, units, 1);
    mass.textContent = unitConverter(unit, units, 2);
})