function split(str, delim) {
  const delimIndex = str.indexOf(delim);

  if (delimIndex === -1) {
    return str;
  }
  if (delimIndex === 0) {
    return split(
      str.slice(delimIndex + 1),
      delim
    );
  }

  const newstr = str.slice(
    0,
    delimIndex
  );

  // if (delimIndex === str.length - 1) {
  //   console.log(newstr);
  //   return newstr;
  // }
  // console.log(
  //   newstr,
  //   str.slice(delimIndex + 1)
  // );

  return [
    newstr,
    ...split(
      str.slice(delimIndex + 1),
      delim
    )
  ];
}
console.log(
  split('hellojsljfsljf', 'j')
);

console.log(
  split('hello/sdfsdf/', '/')
);

console.log(
  split('/hello/sdfsdf/', '/')
);
