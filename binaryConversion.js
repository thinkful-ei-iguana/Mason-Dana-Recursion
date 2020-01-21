function convert(someInt) {
  if (someInt <= 1) {
    return someInt ? '1' : '0';
  }

  return (
    String(someInt % 2) +
    convert(Math.floor(someInt / 2))
  );
}

console.log(convert(25));
