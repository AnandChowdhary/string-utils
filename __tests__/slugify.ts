import { slugify } from "../utils/slugify";

test("slugify a term", () => {
  expect(slugify("Hello world")).toBe("hello-world");
});

test("slugify a term with ,!", () => {
  expect(slugify("Hello, world!")).toBe("hello-world");
});

test("slugify a term with numbers", () => {
  expect(slugify("hello 123")).toBe("hello-123");
});

test("slugify a term with special characters", () => {
  expect(slugify("hello W!rld")).toBe("hello-w-rld");
});

test("slugify a term with special characters", () => {
  expect(slugify("hello W!rld", true)).toBe("hello-w-rld");
});

test("slugify a term removing special characters", () => {
  expect(slugify("hello Wôrld", false)).toBe("hello-wrld");
});

test("removes slug padding", () => {
  expect(slugify(" Hello World ")).toBe("hello-world");
});

test("removes slug padding", () => {
  expect(slugify("-Hello World ")).toBe("hello-world");
});

test("slugify a slug", () => {
  expect(slugify("hello")).toBe("hello");
});
