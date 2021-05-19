//factorial

// const factorial = function (n) {
//     if(n === 0) {
//         return 1;
//     } else {
//     return n * factorial(n - 1);
//     }
// };

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);

// const fibonacci = function(n){
//     if (n===0){
//         return 0;
//     } else if (n===1) {
//         return 1;
//     } else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     };
// };

const fibonacci = (n) => (n===0)
    ? 0
    : n===1
    ? 1
    : fibonacci(n-1) + fibonacci(n-2);


const lucas = (n) => (n===0)
    ? 2
    : n===1
    ? 1
    : lucas(n-1) + lucas(n-2);

// const brady = (n) => (n===0)
//     ? 2308
//     : n===1
//     ? 4261
//     : brady(n-1) + brady(n-2);

const brady = (b0, b1, n) => (n===0)
    ? b0
    : n===1
    ? b1
    : brady(b0,b1,n-1) + brady(b0,b1,n-2);

const fibonacci_like = (b0, b1) => (n) => brady(b0,b1,n);
const b = fibonacci_like(2308,4261);








debugger;
