import { ageFunction } from "./ageFunction.ts";
import { numberFunction } from "./numberFunction.ts";
import { sexFunction } from "./sexFunction.ts";
import { Team } from "./team.ts";

const N = 1;
const S = 15;
const A = 15;

export function objectiveFunction(...teams: Team[]) {
  return N * numberFunction(teams) + S * sexFunction(teams) +
    A * ageFunction(teams);
}
