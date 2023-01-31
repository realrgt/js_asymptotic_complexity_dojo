console.log(solution([3, 1, 2, 4, 3]));

function solution(A) {
  let diff = Infinity;

  for (let i = 1; i < A.length; i++) {
    const listAtLeft = A.slice(0, i);
    const listAtRight = A.slice(i, A.length + 1);

    const someLeftList = listAtLeft.reduce((acc, value) => acc + value, 0);
    const someRightList = listAtRight.reduce((acc, value) => acc + value, 0);

    const currentDiff = Math.abs(someLeftList - someRightList);

    if (diff > currentDiff) diff = currentDiff;
  }
  return diff;
}
