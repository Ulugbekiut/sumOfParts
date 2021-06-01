function partsSums(ls) {
  // your code
  let sum = ls.reduce((x, y) => x + y, 0);
  let resultArr = [];
  let x = 0;

  if (ls.length === 0) {
    return [0];
  }

  for (let i = 0; i <= ls.length; i += 1) {
    resultArr.push(sum);
    x = ls[i];
    sum -= x;
  }

  return resultArr;
}
//The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

/*The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.*/
