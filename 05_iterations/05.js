const cod = ["js", "ruby", "java", "python", "cpp"];

// cod.forEach( function (val){
//     console.log(val);
    
// })

// cod.forEach((val) => {
//     console.log(val);
// })

// function printMe(val){
//     console.log(val);
// }
// cod.forEach(printMe);  // ye 3 alg alg way for using foreach

// cod.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const arr = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "rubby",
        languageFileName: "rb"
    }
]
arr.forEach( (item) => {
    console.log(item.languageName);
})