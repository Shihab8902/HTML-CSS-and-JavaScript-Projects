//Element Selection
let fontSize = document.querySelector("#fontSize");
let fontColor = document.querySelector("#fontColor");
let bgColor = document.querySelector("#bgColor");
let resetButton = document.querySelector("#resetButton");
let textField = document.querySelector("#textField");

// Getting values
const getFontSize = (e)=>{
    let selectedFontSize = e.target.value;
    textField.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);

}

const getFontColor = (e)=>{
    let selectedFontColor = e.target.value;
    textField.style.color = selectedFontColor;
    localStorage.setItem("fontColor", selectedFontColor);
}

const getBgColor = (e)=>{
    let selectedBgColor = e.target.value;
    textField.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
}

//Set Values 
const setValues = (x, y, z)=>{
    fontSize.value = x;
    textField.style.fontSize = x;
    fontColor.value = y;
    textField.style.color = y;
    bgColor.value = z;
    textField.style.backgroundColor = z;
 }

//Adding event listeners
fontSize.addEventListener("change", getFontSize);
fontColor.addEventListener("change", getFontColor);
bgColor.addEventListener("change", getBgColor);

//Initial Configaration
const InitialConfig = ()=>{
    let getFontSize = localStorage.getItem("fontSize");
    let getFontColor = localStorage.getItem("fontColor");
    let getBgColor = localStorage.getItem("bgColor");
    textField.style.fontSize = getFontSize;
    textField.style.fontColor = getFontColor;
    textField.style.backgroundColor = getBgColor;
    fontSize.value = getFontSize;
    fontColor.value = getFontColor;
    bgColor.value = getBgColor;
}
InitialConfig();



//Reset
resetButton.addEventListener("click", ()=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("fontColor");
    localStorage.removeItem("bgColor");
    setValues("11px", "black", "white");
})





