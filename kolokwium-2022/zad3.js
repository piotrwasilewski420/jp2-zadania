"use strict";

const getCounter = (min, max) => {
  let count = min - 1;

  return () => {
    if (count + 1 > max) return undefined;
    else return ++count;
  };
};

const counter = getCounter(5, 7);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
