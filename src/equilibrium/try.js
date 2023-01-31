console.log(solution([3, 1, 2, 4, 3]));

function solution(A) {
  const diffsList = [];

  for (let i = 1; i < A.length; i++) {
    const listAtLeft = A.slice(0, i);
    const listAtRight = A.slice(i, A.length + 1);

    const someLeftList = listAtLeft.reduce((acc, value) => acc + value, 0);
    const someRightList = listAtRight.reduce((acc, value) => acc + value, 0);

    const diffLeftRight = someLeftList - someRightList;

    diffsList.push(Math.abs(diffLeftRight));
  }

  return Math.min(...diffsList);
}
