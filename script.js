let fontSelect = document.getElementById("fontSelect");
let displayText = document.getElementById("displayText");

let sizeSelect = document.getElementById("sizeSelect");
let colorSelect = document.getElementById("colorSelect");

fontSelect.addEventListener("click", function() {
    const selectedFont = fontSelect.value;
    displayText.style.fontFamily = selectedFont;
});


sizeSelect.addEventListener("click", function() {
    const selectedSize = sizeSelect.value;
    displayText.style.fontSize = selectedSize;
});

colorSelect.addEventListener("click", function() {
    const selectedColor = colorSelect.value;
    displayText.style.color = selectedColor;
});
