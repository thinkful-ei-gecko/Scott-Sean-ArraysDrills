function max(numbers) {
    let maxNumber = numbers[0];
    let i = 1;
    if (numbers.length === 0) {
      return null;
    }
    while (i < numbers.length) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
        i++;
    }
    return (maxNumber);
  }
  
  function min(numbers) {
    let minNumber = numbers[0];
    let k = 1;
    if (numbers.length === 0) {
      return null;
    }
     while (k < numbers.length) {
        if (numbers[k] < minNumber) {
            minNumber = numbers[k];
          }
        k++;
     }
    return (minNumber);
    // your code here
  }
 