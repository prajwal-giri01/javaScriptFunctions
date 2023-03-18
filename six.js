function oddishOrEvenish(num){
    let sum = 0;
    while(num!=0){
      const digit = num % 10;
      sum += digit;
      num = Math.floor(num / 10);
    }
    if (sum % 2 === 0) {
      return "Evenish";
    } else {
      return "Oddish";
    }
  }
  
  console.log(oddishOrEvenish(55)); 
  