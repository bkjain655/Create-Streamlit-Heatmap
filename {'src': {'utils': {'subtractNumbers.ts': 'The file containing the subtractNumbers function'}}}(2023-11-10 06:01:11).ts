class Calculator {
  private result: number;

  constructor(initialValue: number) {
    this.result = initialValue;
  }

  subtract(num: number): Calculator {
    this.result -= num;
    return this;
  }

  getResult(): number {
    return this.result;
  }
}

const subtractNumbers = (...numbers: number[]): number => {
  const calculator = new Calculator(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    calculator.subtract(numbers[i]);
  }

  return calculator.getResult();
};