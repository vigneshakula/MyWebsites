let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");  
document.getElementById("applyButton").addEventListener("click",function(){
    customButton.style.backgroundColor=bgColor.value;
    customButton.style.color = fontColor.value;
    customButton.style.fontSize=fontSize.value;
    customButton.style.fontWeight=fontWeight.value;
    customButton.style.padding=padding.value;
    customButton.style.borderRadius=borderRadius.value;
});
document.getElementById("reapplyButton").addEventListener("click",function(){
    bgColor.value="";
    fontColor.value="";
    fontSize.value="";
    fontWeight.value="";
    padding.value="";
    borderRadius.value="";
});