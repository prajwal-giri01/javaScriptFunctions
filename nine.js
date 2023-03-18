function decimalToBinary(decimal) {
    if (decimal === 0) {
      return "0";
    }
    let binary = "";
    let value = 1;
    while (value <= decimal) {
      value *= 2;
    }
    value /= 2;
    while (value >= 1) {
      if (decimal >= value) {
        binary += "1";
        decimal -= value;
      } else {
        binary += "0";
      }
      value /= 2;
    }
    return binary;
  }

  console.log(decimalToBinary(10))
  