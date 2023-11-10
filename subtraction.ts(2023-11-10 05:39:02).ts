class SubtractNumbers {
  private result: number;

  constructor(num: number) {
    this.result = num;
  }

  subtract(num: number): SubtractNumbers {
    this.result -= num;
    return this;
  }

  getResult(): number {
    return this.result;
  }
}

const result = new SubtractNumbers(100)
  .subtract(10)
  .subtract(20)
  .subtract(30)
  .subtract(40)
  .subtract(50)
  .subtract(60)
  .subtract(70)
  .getResult();

console.log(result);