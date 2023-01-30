const givenElements = [1, 4, 7, 8, 2, 5, 3, 6, 10];

console.log(solution(givenElements));

function solution(A) {
  const actualSum = A.reduce((acc, value) => acc + value);
  const maxElement = A.length + 1;
  const firstElement = A[0];
  const expectedSum = (maxElement * (firstElement + maxElement)) / 2; // Sn = [n(A1 + An)]/2

  return expectedSum - actualSum;
}
