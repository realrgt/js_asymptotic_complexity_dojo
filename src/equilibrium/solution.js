console.log(solution([3, 1, 2, 4, 3]));

function solution(A) {
  let leftSum = A[0];
  let rightSum = A.slice(1).reduce((acc, val) => (acc += val), 0);

  let diff = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];

    const currentDiff = Math.abs(leftSum - rightSum);

    if (currentDiff < diff) diff = currentDiff;
  }

  return diff;
}
