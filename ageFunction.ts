import { addVectors, scaleVector, TwoDVector } from "./helper.ts";
import { Team } from "./team.ts";

export function ageFunction(teams: Team[]) {
  const averageTeam = averageVector(teams);
  let result = 0;
  for (const team of teams) {
    const dist = addVectors(
      team.members.ageVector(),
      scaleVector(-1, averageTeam),
    );
    result += Math.sqrt(Math.pow(dist[0], 2) + Math.pow(dist[1], 2));
  }
  return result;
}

function averageVector(teams: Team[]) {
  let result = [0, 0] as TwoDVector;
  let totalPeople = 0;
  for (const team of teams) {
    const ageDistribution = team.members.ageVector();
    const addedPeople = team.members.length();
    totalPeople += addedPeople;
    result = addVectors(result, scaleVector(addedPeople, ageDistribution));
  }
  return scaleVector(1 / totalPeople, result);
}
