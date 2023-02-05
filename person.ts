import { ADULT_AGE } from "./consts.ts";
import type { AgeVector, Queryable, Sex, SexVector } from "./types.ts";

export class Person implements Queryable {
  constructor(
    public name: string,
    public age: number,
    public sex: Sex,
  ) {}

  sexVector() {
    const returnValue = this.sex == "male" ? [1, 0] : [0, 1];
    return returnValue as SexVector;
  }
  ageVector() {
    const returnValue = this.age < ADULT_AGE ? [1, 0] : [0, 1];
    return returnValue as AgeVector;
  }
  length() {
    return 1;
  }
  toString() {
    return `{name: ${this.name}\nage: ${this.age}\nsex: ${this.sex}}`
  }
}
