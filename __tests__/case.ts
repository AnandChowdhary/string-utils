import {
  capitalize,
  camelCase,
  kebabCase,
  snakeCase
} from "../utils/case";

test("capitalizes a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes a sentence", () => {
  expect(capitalize("hello, world!")).toBe("Hello, world!");
});

test("capitalizes a capital word", () => {
  expect(capitalize("HELLO")).toBe("HELLO");
});

test("capitalizes a word (forced)", () => {
  expect(capitalize("HELLO", true)).toBe("Hello");
});

test("camel cases a word", () => {
  expect(camelCase("Hello world")).toBe("helloWorld");
});

test("kebab cases a word", () => {
  expect(kebabCase("Hello world")).toBe("hello-world");
});

test("snake cases a word", () => {
  expect(snakeCase("Hello world")).toBe("hello_world");
});
