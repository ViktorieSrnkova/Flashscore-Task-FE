import { sortBySportName } from "../sortData";

test("Correctly sort an array of objects by sport name alphabeticaly", () => {
  const data = [
    { sport: { name: "Basketball" } },
    { sport: { name: "Tennis" } },
    { sport: { name: "Soccer" } },
  ];
  const sorted = [
    { sport: { name: "Basketball" } },
    { sport: { name: "Soccer" } },
    { sport: { name: "Tennis" } },
  ];
  expect(sortBySportName(data)).toEqual(sorted);
});

test("In case of an array being sorted already, should just return it", () => {
  const data = [
    { sport: { name: "Basketball" } },
    { sport: { name: "Soccer" } },
    { sport: { name: "Tennis" } },
  ];
  const sorted = [
    { sport: { name: "Basketball" } },
    { sport: { name: "Soccer" } },
    { sport: { name: "Tennis" } },
  ];
  expect(sortBySportName(data)).toEqual(sorted);
});

test("Handles empty array", () => {
  const data: any[] = [];
  expect(sortBySportName(data)).toEqual([]);
});

test("Handles array with one element", () => {
  const data = [{ sport: { name: "Basketball" } }];
  expect(sortBySportName(data)).toEqual([{ sport: { name: "Basketball" } }]);
});

test("Is case insensitive", () => {
  const data = [
    { sport: { name: "tennis" } },
    { sport: { name: "Basketball" } },
    { sport: { name: "soccer" } },
  ];
  const expected = [
    { sport: { name: "Basketball" } },
    { sport: { name: "soccer" } },
    { sport: { name: "tennis" } },
  ];
  expect(sortBySportName(data)).toEqual(expected);
});

test("Throws an error if sport name isn't a string", () => {
  const data = [{ sport: { name: 123 } }];
  expect(() => sortBySportName(data)).toThrow();
});

test("Throws an error if sport name is missing.", () => {
  const data = [
    { sport: {} },
    { sport: { name: "Basketball" } },
    { sport: { name: "soccer" } },
  ];
  expect(() => sortBySportName(data)).toThrow();
});
