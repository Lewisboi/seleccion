import { Group } from "./group.ts";
import { optimize } from "./optimize.ts";
import { Person } from "./person.ts";
import { Team } from "./team.ts";

const max = new Person("Max", 18, "male");
const ina = new Person("Ina", 18, "female");
const farru = new Person("Farru", 21, "male");
const pipe = new Person("Pipe", 23, "male");
const sungaboi = new Person("Sungaboi", 27, "male");
const trini = new Person("Trini", 12, "female");
const diego = new Person("Diego", 17, "male");
const roberto = new Person("Roberto", 15, "male");
const pepito = new Person("Pepito", 17, "male");
const evy = new Person("Evy", 7, "female");
const rocio = new Person("Rocio", 11, "female");
const cris = new Person("Cris", 15, "male");

const g1 = new Group(max, ina);
const g2 = new Group(farru, pipe);
const g3 = new Group(roberto, pepito, evy, rocio);

const participants = new Group(g1, g2, g3, sungaboi, trini, diego, cris);
const teams = [
  new Team("blue", new Group()),
  new Team("green", new Group()),
  new Team("red", new Group()),
];

Deno.test(function testOptimize() {
  optimize(participants, ...teams);
  for (const t of teams) {
    console.log(t.toString());
  }
});
