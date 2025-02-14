const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');
console.log(buttons);

buttons.forEach(function (colorButton){
    console.log(colorButton);
    colorButton.afterClick;
})

const afterClick = document.addEventListener('click', (color) => {
    console.log(color.target);
    body.style.backgroundColor = color.target.id;
})

//console mei ja kr dekhna sb smj a jaye ga 

