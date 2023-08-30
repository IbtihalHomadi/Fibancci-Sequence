function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function main() {
  const n = Number(prompt("Enter the number of terms: "));
  for (let i = 0; i < n; i++) {
    const fibonacciNumber = fibonacci(i);
    console.log(fibonacciNumber);
  }
}

main();