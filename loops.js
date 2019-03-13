function forLoop(arr) {
  let result = [];
  for(let i = 0; i < 25; i++){
    result.push(`"I am ${i} strange loop${i === 1 || i !== 0 ? '' : 's'}."`);
  }
  return result;
}
function whileLoop(num) {
  while (num <= 0) {
    console.log(num);
  }
  return "done";
}
