// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})(); // ismey yaad se ; lgana jroori hai nhi to next time IIFE function execute nhi hoga

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Vinay');

// Some features of IIFE
// Encapsulation – Variables inside an IIFE do not pollute the global scope.
// Used for Data Privacy – Useful for creating private variables and functions.
// Can Have Parameters – You can pass arguments to an IIFE.
// Immediately Executed – Runs as soon as it is defined.
/*
Why Use IIFE?
To avoid variable conflicts in the global scope.
To create private variables.
To execute code immediately without waiting for event handlers.
*/