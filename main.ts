import { Group } from "./group.ts";
import { loadFrom } from "./parsejSON.ts";
import { Team } from "./team.ts";
import { optimize } from "./optimize.ts";

const PATH = "people.json";
const participants = await loadFrom(PATH);
participants.sortByLength()
const teams = [
  new Team("blue", new Group()),
  new Team("green", new Group()),
  new Team("red", new Group()),
];

optimize(participants, ...teams);
for (const t of teams) {
  console.log(t.toString());
}
