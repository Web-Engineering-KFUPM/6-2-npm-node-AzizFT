export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((result, num) => result - num, numbers[0]);
}

export function multiply(numbers) {
  return 0;
}

export function divide(numbers) {
  return 0;
}