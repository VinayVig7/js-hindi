/*
++++++++++++Execution Phase++++++++++++

1. Global execution = ismey this {} mei sb ka sb maal jata hai.

2. Memory Phase = jo bhi variables diye hai ousmey undefined value jati hai or agr koi function dia hai ouski defination jati
hai.

3. Execution Phase = variables ki value jati hai or jo functions ki phle definations gyi thi ouume doubara se process chalu hota hai
memory phase ka or execution phase ka fir vha se jo value aati hai ouska process hota hai call stack mei

*/

let val1 = 10;
let val2 = 5;
function addNum(){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10,2);
/*
    1. Global execution
        this mei sara {}
    
    2. Memory Phase
        val1 = undefined
        val2 = undefined
        addNum = defination
        result1 = undefined
        result2= undefined

    3. Execution Phase
        val1 = 10
        val2 = 5
        addNum = 
            Memory Phase
                val1 = undefined
                val2 = undefined
                total = undefined
            Execution Context
                num1 = 10
                num2 = 5
                total = 15 yha se value return or ye vala stack delete
        result 1 = same process doubara se hoga function ka 
        result 2 = same process doubara se hoga function ka or ouske baad ye vala stack bhi delete sidha global execution mei
        miley ge sb ke sb..

*/