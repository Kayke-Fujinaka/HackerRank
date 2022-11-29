const SIZE = 4;

function staircase(size) {
  for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "#".repeat(i));
  }
}

staircase(SIZE);
