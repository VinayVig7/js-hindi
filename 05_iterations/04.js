const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Rubby",
    swift: "swift for apple"
}

// for (const key of myObj) {
//     console.log(key);
    
// }  ye possible nhi hai because myObj is not iterable tum chaihye to [key, value] lga ke bhi try krlo kuch nhi aaye ga iske liye for in vali loop use hoti hai

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
    
}

const arr = ["js", "py", "c++", "c", "swift"];

for (const key in arr) {
    console.log(`${key} :- ${arr[key]}`);
    
}// for of mei direct value aarhyi thi on the otherhand yha pe keys aarhi hai for in mei
//or map mei hm for in use nhi kr sktey kyuki maps iterable nhi hai