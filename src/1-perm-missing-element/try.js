const givenElements = [2, 0, 4, 7, 8, 1, 5, 3, 6, 10];

console.log(solution(givenElements));

function solution(a) {
  const sortedElements = a.sort((x, y) => x - y);

  for (let i = 0; i < sortedElements.length; i++) {
    if (i == sortedElements.length) return;

    const currentElement = sortedElements[i];
    const followingElement = sortedElements[i + 1];

    if (followingElement - currentElement > 1) return sortedElements[i] + 1;
  }

  return -1;
}
