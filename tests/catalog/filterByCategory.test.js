const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "all";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = undefined;
    expect(filterByCategory(category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const category = "electronics";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const category = "books";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const category = "home";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    const category = "clothes";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    const category = "toys";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    const category = "sports";
    expect(filterByCategory(category).map((v) => v.id)).toEqual([]);
  });
});
