import { shoppingList } from "./shoppingList";

// 1
const shoppingListWithIndexes = shoppingList.reduce((acc, current) => {
  return [...acc, { [current.produkt]: { ...current } }];
}, []);

// console.log(shoppingListWithIndexes);

// 2
const howMuchOnDairy = shoppingList.reduce((acc, current) => {
  return current.typ === "nabiał" ? acc + current.cena * current.ilosc : acc;
}, 0);

// console.log(howMuchOnDairy);

// 3
const thingsInKg = shoppingList
  .reduce((acc, current) => {
    return current.jednostka === "kg" ? [...acc, current.produkt] : acc;
  }, [])
  .sort();

// console.log(thingsInKg);

// 4
const findProductsByType = (shoppingList, type) => {
  return shoppingList
    .reduce((acc, product) => {
      return product.typ === type && product.cena * product.ilosc < 10
        ? [...acc, product]
        : acc;
    }, [])
    .sort((prev, curr) =>
      prev.cena * prev.ilosc > curr.cena * curr.ilosc ? 1 : -1
    );
};

// console.log(findProductsByType(shoppingList, "nabiał"));

// 5
const thingsInSztuki = shoppingList.reduce((acc, current) => {
  return current.jednostka === "sztuk" ? [...acc, current.produkt] : acc;
}, []);

// console.log(thingsInSztuki);

// 6
const list = shoppingList.reduce((acc, product) => {
  if (acc[product.typ] === undefined) {
    acc[product.typ] = [];
    return {
      ...acc,
      [product.typ]: [
        ...acc[product.typ],
        `${acc[product.typ].length + 1}. ${product.produkt} - ${
          product.jednostka
        }: ${product.ilosc}`,
      ],
    };
  } else {
    return {
      ...acc,
      [product.typ]: [
        ...acc[product.typ],
        `${acc[product.typ].length + 1}. ${product.produkt} - ${
          product.jednostka
        }: ${product.ilosc}`,
      ],
    };
  }
}, {});

const result = Object.keys(list)
  .reduce((acc, current) => {
    return [...acc, [current, list[current]]];
  }, [])
  .reduce((acc, current) => {
    return (
      acc +
      `${((string) => string.charAt(0).toUpperCase() + string.slice(1))(
        current[0]
      )}:\n` +
      current[1].reduce((products, entry) => {
        return products + entry + "\n";
      }, "")
    );
  }, "");

// console.log(result);

// 7
const mostExpensivePrice = shoppingList.reduce((acc, product) => {
  const price = product.cena * product.ilosc;
  return acc < price ? price : acc;
}, 0);

const cheapestProducts = shoppingList.reduce((acc, current) => {
  return current.cena * current.ilosc < mostExpensivePrice
    ? [...acc, { [current.produkt]: current.cena * current.ilosc }]
    : acc;
}, []);

// console.log(cheapestProducts);
