// Closure :Function bundled with its lexical environment is known as a closure.
// A closure gives access to all the variables of it's parent function even after the that parent function has returned or executed. The function keeps a refernce to it's outer scope which preserves the scope chain throughout the time

// function x(){
//     let a = 100
//     function y(){
//         let b = 200
//         function z(){
//             console.log(`${a}+${b}`);
//         }
//         z()
//     }
//     y()
// }
// x()

function y() {
    let a = 200
    function z() {
        console.log(a);
    }
    a = 400
    return z
}
let f = y()
console.log(f)
f()
//Here function z is stored in f ,but still it remembers the reference to its outer scope