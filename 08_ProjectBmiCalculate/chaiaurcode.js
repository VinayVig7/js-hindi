const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
let results = document.querySelector('#results');
form.addEventListener('submit', (e) => {
    // console.log(e); //samjne ke liye  kuch nhi hai bus submit event hai ye console mei dekho smj jao ge
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    // console.log(height);// smjne ke liye console mei
    const weight = parseInt(document.querySelector("#weight").value);

    if(height === "" || height <= 0 || isNaN(height)){
        results.innerHTML = `Please put the valid height ${height}`;
    }else if(weight === "" || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please put the valid height ${weight}`;
    }else{
        const heightInMeter = height / 100;
        results.innerHTML = weight / (heightInMeter**2);
    }
})