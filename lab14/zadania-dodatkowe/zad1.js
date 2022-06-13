"use strict";

// To ogólnie nie działa, nie wiem jak to zrobić, jak masz odpowiedź to zrób PRa

const getRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};
const getNumber = (cb) => {
  setTimeout(() => {
    cb(getRandomNumber());
  }, getRandomNumber() * 5);
};
const asyncSort = (dim) => {
  const unsortedArray = [...Array(dim).keys()].map((_) => {
    return getNumber((n) => n + 1);
  });

  console.log(unsortedArray);
};
asyncSort(5);
