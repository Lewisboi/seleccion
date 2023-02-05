import { Group } from "./group.ts";

type Color = "red" | "green" | "blue";

export class Team {
  constructor(
    public color: Color,
    public members: Group,
  ) {}

  length() {
    return this.members.length();
  }
  toString() {
    return `--- ${this.color} ---\n${this.members.toString()}\npeople: ${this.members.length()}\nage vector: ${this.members.ageVector()}\nsex vector: ${this.members.sexVector()}`
  }
}
