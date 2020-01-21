function count(num) {
  if (num === 0) {
    console.log(
      'All sheep jumped over the fence.'
    );
    return;
  }
  console.log(
    `${num}: Another sheep jumps over the fence.`
  );
  return count(num - 1);
}

count(6);
