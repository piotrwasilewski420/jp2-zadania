"use strict";

const func = (helper) => {
  return helper();
};

func(() => {
  console.log("coś");
});
