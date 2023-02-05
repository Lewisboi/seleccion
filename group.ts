import type { AgeVector, Queryable, SexVector } from "./types.ts";

export class Group implements Queryable {
  members: Queryable[] = [];
  constructor(...ms: Queryable[]) {
    for (const m of ms) {
      this.addMember(m);
    }
  }
  addMember(newMember: Queryable) {
    this.members.push(newMember);
  }
  removeLastMember() {
    return this.members.pop();
  }
  sexVector(): SexVector {
    const length = this.length();
    if (!length) {
      return [0.5, 0.5]
    }
    const returnValue: SexVector = [0, 0];
    for (const vec of this.members) {
      const [v1, v2] = vec.sexVector();
      returnValue[0] += v1 * vec.length();
      returnValue[1] += v2 * vec.length();
    }
    return [
      returnValue[0] / length,
      returnValue[1] / length,
    ];
  }
  ageVector(): AgeVector {
    const length = this.length();
    if (!length) {
      return [0.5, 0.5]
    }
    const returnValue: AgeVector = [0, 0];
    for (const vec of this.members) {
      const [v1, v2] = vec.ageVector();
      returnValue[0] += v1 * vec.length();
      returnValue[1] += v2 * vec.length();
    }
    return [
      returnValue[0] / length,
      returnValue[1] / length,
    ];
  }
  length() {
    let l = 0;
    for (const elem of this.members) {
      l += elem.length();
    }
    return l;
  }
  toString() {
    let toReturn = "["
    for (const elem of this.members) {
      toReturn += `${elem.toString()}, `;
    }
    if (toReturn.length > 1) {
      toReturn = toReturn.slice(0, -2);
    }
    return toReturn + "]\n"
  }
  sortByLength() {
    this.members.sort((a, b) => a.length() - b.length())
  }
}
