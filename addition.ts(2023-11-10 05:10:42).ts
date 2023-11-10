class AddNumbers {
  private sum: number;

  constructor(num: number) {
    this.sum = num;
  }

  add(num: number): AddNumbers {
    this.sum += num;
    return this;
  }

  getResult(): number {
    return this.sum;
  }
}

const result = new AddNumbers(5)
  .add(10)
  .add(15)
  .add(20)
  .add(25)
  .add(30)
  .getResult();

console.log(result);