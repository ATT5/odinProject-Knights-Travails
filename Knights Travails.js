"use strict";

function knightMoves(start, target) {
  const boardSize = 8;
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const visited = new Array(boardSize)
    .fill(false)
    .map(() => new Array(boardSize).fill(false));

  const parents = new Array(boardSize)
    .fill(null)
    .map(() => new Array(boardSize).fill(null));

  const queue = [];
  queue.push(start);
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === target[0] && y === target[0]) {
      printPath(start, target, parents);
      break;
    }

    for (let move of moves) {
      const newX = x + move[0];
      const newY = y + move[1];

      if (isValid(newX, newY, boardSize) && !visited[newX][newY]) {
        queue.push([newX, newY]);
        visited[newX][newY] = true;
        parents[newX][newY] = [x, y];
      }
    }
  }
}

function isValid(x, y, boardSize) {
  return x >= 0 && y >= 0 && x < boardSize && y < boardSize;
}

function printPath(start, target, parents) {
  const path = [];
  let current = target;

  while (current !== null) {
    path.unshift(current);
    current = parents[current[0]][current[1]];
  }

  console.log("Path from", start, "to", target);
  for (let position of path) {
    console.log(position);
  }
}

knightMoves([0, 0], [3, 3]); // [[0, 0], [1, 2]]
knightMoves([3, 3], [4, 3]); // [[0, 0], [1, 2]]
