import { Group } from "./group.ts";
import { objectiveFunction } from "./objectiveFunction.ts";
import { Team } from "./team.ts";
import { Queryable } from "./types.ts";

export function optimize(participants: Group, ...teams: Team[]) {
  while (participants.members.length) {
    const participant = participants.removeLastMember();
    if (participant != undefined) {
      chooseTeam(participant, ...teams);
    }
  }
}

function chooseTeam(participant: Queryable, ...teams: Team[]) {
  const teamValue: [Team, number][] = [];
  for (const t of teams) {
    t.members.addMember(participant);
    const value = objectiveFunction(...teams);
    teamValue.push([t, value]);
    t.members.removeLastMember();
  }
  teamValue.sort((a, b) => a[1] - b[1]);
  const [bestTeam, _] = teamValue[0];
  bestTeam.members.addMember(participant);
}
