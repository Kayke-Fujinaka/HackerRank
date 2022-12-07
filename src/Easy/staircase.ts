// Write a program that prints a staircase of size n
// Input: 6
/* Output:
         #
        ##
       ###
      ####
     #####
    ######
*/

const SIZE = 4;

function staircase(size: number) {
  for (let i = 1; i <= size; i++) {
    console.log(" ".repeat(size - i) + "#".repeat(i));
  }
}

staircase(SIZE);
