import { getQueryFromUrl } from "../urlHelpers";

describe("getQueryFromUrl", () => {
  let originalLocation: Location;
  beforeAll(() => {
    originalLocation = window.location;
  });
  afterAll(() => {
    Object.defineProperty(window, "location", { value: originalLocation });
  });
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: { ...originalLocation, search: "" },
      writable: true,
    });
  });

  test("Returns the query parameter value from the URL", () => {
    Object.defineProperty(window, "location", {
      value: { ...window.location, search: "?query=testQuery" },
    });
    expect(getQueryFromUrl()).toBe("testQuery");
  });

  test("Return an empty string if the query parameter is not present", () => {
    Object.defineProperty(window, "location", {
      value: { ...window.location, search: "?otherParam=someValue" },
    });
    expect(getQueryFromUrl()).toBe("");
  });

  test("Returns an empty string if the query string is empty", () => {
    Object.defineProperty(window, "location", {
      value: { ...window.location, search: "" },
    });
    expect(getQueryFromUrl()).toBe("");
  });
});
