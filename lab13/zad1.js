"use strict";
const func1 = async (x, y) => x + y;
const func2 = async (x, y) => x * y;
const cb = (x, y) => x + y;

const [x1, y1] = [10, 10];
const [x2, y2] = [5, 5];

const oneAfterAnother = async (func1, func2, cb) => {
  Promise.all([func1(x1, y1), func2(x2, y2)]).then((res) => {
    const [arg1, arg2] = res;
    console.log(cb(arg1, arg2));
  });
};
oneAfterAnother(func1, func2, cb);
