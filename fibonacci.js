//using iteration
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
  
    const result = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextFib = result[i - 1] + result[i - 2];
      result.push(nextFib);
    }
  
    return result;
  }
  
  
  const fibonacciArray = fibs(8);
  console.log(fibonacciArray); // [0, 1, 1, 2, 3, 5, 8, 13]

//using recursion
function fibsRec(n, result = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    if (result.length < n) {
      const nextFib = result[result.length - 1] + result[result.length - 2];
      result.push(nextFib);
      return fibsRec(n, result);
    }
  
    return result;
  }
  
  // Example usage:
  const fibonacciArrayRec = fibsRec(8);
  console.log(fibonacciArrayRec); // [0, 1, 1, 2, 3, 5, 8, 13]