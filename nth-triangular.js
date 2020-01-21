function triangle(num) {
  if (num <= 0) {
    return 0;
  }
  return num + triangle(num - 1);
}

console.log(triangle(9));
