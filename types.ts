export type Sex = "male" | "female";

export type AgeVector = [child: number, adult: number];
export type SexVector = [male: number, female: number];

export interface AgeQueryable {
  ageVector(): AgeVector;
}

export interface SexQueryable {
  sexVector(): SexVector;
}

export interface LengthQueryable {
  length(): number;
}

export type Queryable = AgeQueryable & SexQueryable & LengthQueryable;
