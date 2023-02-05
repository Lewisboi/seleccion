export type TwoDVector = [number, number]

function addTwoVectors(v1: TwoDVector, v2: TwoDVector): TwoDVector {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function addVectors(...vectors: TwoDVector[]): TwoDVector {
  if (vectors.length == 1) {
    return vectors[0];
  }
  const firstVector = vectors.shift() as TwoDVector;
  const rest = addVectors(...vectors);
  return addTwoVectors(firstVector, rest);
}

export function scaleVector(factor: number, vector: TwoDVector) {
  return [factor * vector[0], factor * vector[1]] as TwoDVector;
}

// (1, 2) + (2, 3) + (2, 2) + (1, 1)
// (1, 2) + (5, 6)