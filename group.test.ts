import { Group } from "./group.ts";
import { Person } from "./person.ts";

const PEOPLE = [
  new Person("Max", 18, "male"),
  new Person("Ina", 18, "female"),
  new Person("Farru", 21, "male"),
  new Person("Pipe", 23, "male"),
  new Person("Sungaboi", 27, "male"),
  new Person("Trini", 12, "female"),
  new Person("Diego", 17, "male")
]

// Deno.test(function lengthsOK() {
//   const g1 = new Group(PEOPLE[0], PEOPLE[1]);
//   const g2 = new Group(PEOPLE[2], PEOPLE[3]);
//   const combined = new Group();
//   combined.addMember(g1);
//   combined.addMember(g2);
//   combined.addMember(PEOPLE[4]);
//   combined.addMember(PEOPLE[5]);
//   combined.addMember(PEOPLE[6]);
//   console.log(combined.length());
//   console.log(combined.ageVector());
//   console.log(combined.sexVector());
// })