"use strict";

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, current, index) => {
  if (index == 1) {
    console.log(`${index - 1}: ${prev}`);
    console.log(`${index}: ${current}`);
  } else console.log(`${index}: ${current}`);

  return 0;
});
