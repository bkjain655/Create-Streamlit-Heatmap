import { AddNumbers } from './addition';

describe('AddNumbers', () => {
  it('should add 6 numbers correctly', () => {
    const result = new AddNumbers(5)
      .add(10)
      .add(15)
      .add(20)
      .add(25)
      .add(30)
      .getResult();

    expect(result).toBe(105);
  });

  it('should add 7 numbers correctly', () => {
    const result = new AddNumbers(5)
      .add(10)
      .add(15)
      .add(20)
      .add(25)
      .add(30)
      .add(35)
      .getResult();

    expect(result).toBe(140);
  });
});