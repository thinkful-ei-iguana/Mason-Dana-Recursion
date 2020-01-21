// // function fib(n, start = 0) {
// //   if (start <= 1) {
// //     return [
// //       start ? 1 : 0,
// //       ...fib(n, start + fib(n, start))
// //     ];
// //   }

// //   return [start, ...fib(n, start + fib(n, start))];
// // }

// function fib(n, seq = []) {
//   if (n <= 1) {
//     return n ? [0, 1] : [0];
//   }

//   // if (n === 2) {
//   //   return [0, 1, 1];
//   // }
//   if(seq.length===0)
//   {
//     return fib(n,seq=[])
//   }

//   if (n > 2 && seq.length>0) {
//     return [
//       ...seq,
//       seq[seq.length] +
//         seq[seq.length + 1]
//     ];
//   }

//   // return [...fib(), fib(n1, n2, n)];
// }

// // n0+n1+n2+n3+n4+n5+n6=n7
// // 0  1  1  2  3  5  8  13

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function fibarray(n) {
  if (n === 2) {
    return [0, 1, 1];
  }
  return [...fibarray(n - 1), fib(n)];
}

console.log(fibarray(7));
