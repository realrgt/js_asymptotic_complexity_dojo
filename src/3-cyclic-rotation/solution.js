function solution(A, K) {
  if (K == 0 || K == A.length) return A;

  const rotatedItems = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    const position = (i + K) % A.length;
    rotatedItems[position] = A[i];
  }

  return rotatedItems;
}

console.log(solution([7, 2, 8, 3, 5], 1));
