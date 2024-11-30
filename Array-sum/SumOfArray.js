function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array.");
    }
  
    return numbers.reduce((sum, num) => {
      if (typeof num !== 'number') {
        throw new Error("All elements in the array must be numbers.");
      }
      return sum + num;
    }, 0);
  }

  console.log(sumArray([1, 2, 3, 4])); // Output: 10
  