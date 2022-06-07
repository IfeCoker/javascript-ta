// src/index.js

// complete the function
function prime(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
}

function solution(arg) {
  return prime(arg);
}