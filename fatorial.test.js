const fatorial = require("./fatorial");

test("Fatorial de 0 deve ser 1", () => {
  expect(fatorial(0)).toBe(1);
});

test("Fatorial de 1 deve ser 1", () => {
  expect(fatorial(1)).toBe(1);
});

test("Fatorial de 5 deve ser 120", () => {
  expect(fatorial(5)).toBe(120);
});

test("Deve lançar erro para números negativos", () => {
  expect(() => fatorial(-1)).toThrow();
});
