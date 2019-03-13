function forLoop(arr) {
  let result = [];
  for(let i = 0; i < 25; i++){
    result.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
  return result;
}
