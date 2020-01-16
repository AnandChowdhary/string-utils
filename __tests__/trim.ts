import { trim } from "../utils/trim";

test("trim a term", () => {
  expect(trim("-hello-", "-")).toBe("hello");
});

test("trim spaces term", () => {
  expect(trim("Hello, world! ", " ")).toBe("Hello, world!");
});
