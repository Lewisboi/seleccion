import { Team } from "./team.ts"

export function numberFunction(teams: Team[]) {
  let avg = 0;
  for (const t of teams) {
    avg += t.members.length();
  }
  avg = avg / teams.length;
  let loss = 0;
  for (const t of teams) {
    loss += Math.abs(t.members.length() - avg);
  }
  return loss;
}
