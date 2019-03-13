let forLoop = function (arr) {
  let result = [];
  let for(let i = 0; i < 25; i++) {
    forLoop.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return result;
}
