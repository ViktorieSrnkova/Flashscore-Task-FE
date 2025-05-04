import { handleTypeFormatting } from "../formatData";

test("Correctly transforms camelCase strings to individual words", () => {
  const camelCasedString = "imStillStandingBetterThanIEverDid";
  const formattedString = "Im still standing better than i ever did";
  expect(handleTypeFormatting(camelCasedString)).toBe(formattedString);
});

test("Correctly transforms PascalCase strings to individual words", () => {
  const camelCasedString = "ImStillStandingBetterThanIEverDid";
  const formattedString = "Im still standing better than i ever did";
  expect(handleTypeFormatting(camelCasedString)).toBe(formattedString);
});

test("Handles single words", () => {
  expect("word").toBe("word");
});

test("Handles empty strings", () => {
  expect("").toBe("");
});

test("Doesnt change lowercase string", () => {
  expect("lowercase").toBe("lowercase");
});
