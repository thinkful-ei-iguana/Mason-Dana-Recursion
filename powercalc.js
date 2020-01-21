function calcPower(base, exp) {
  if (base === 0) {
    return 0;
  }

  if (exp <= 0) {
    //go here if exp neg or 0
    return exp // evaluates truthyness of exp
      ? 'exponent should be >=0' //negative numbers are always true
      : 1;
  }

  return (
    base * calcPower(base, exp - 1)
  );
}
console.log(calcPower(2, -5));

console.log(calcPower(10, 3));
