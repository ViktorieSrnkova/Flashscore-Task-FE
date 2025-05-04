import { fetchSearchResults } from "../searchApi";
describe("Testing localstorage behaviour", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(global, "fetch");
  });

  afterAll(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  test("Caches the API response in localStorage", async () => {
    const ids = "1,2,3,4";
    const query = "froge";
    const cacheKey = `${ids}-${query}`;
    const results = await fetchSearchResults(ids, query);
    const cachedData = localStorage.getItem(cacheKey);

    expect(Array.isArray(results)).toBe(true);
    expect(cachedData).toBe(JSON.stringify(results));
  });

  test("Retrieves data from localStorage if cached", async () => {
    const mockData = [{ id: 1, name: "Test Sport" }];
    const ids = "4";
    const query = "cocos";
    const cacheKey = `${ids}-${query}`;

    localStorage.setItem(cacheKey, JSON.stringify(mockData));

    const results = await fetchSearchResults(ids, query);

    expect(global.fetch).not.toHaveBeenCalled();
    expect(results).toEqual(mockData);
    expect(localStorage.getItem(cacheKey)).toBe(JSON.stringify(mockData));
  });

  test("Does not cache if fetch fails", async () => {
    const mockError = new Error("Sport Api Error. Try again later.");
    const ids = "4";
    const query = "cocos";

    global.fetch = jest.fn(() => Promise.reject(mockError)) as jest.Mock;

    await expect(fetchSearchResults(ids, query)).rejects.toThrow(mockError);
    expect(localStorage.getItem(`${ids}-${query}`)).toBeNull();
  });
});

describe("Testing fetch calls and responses", () => {
  test("Fetches succesfully for a valid query", async () => {
    const results = await fetchSearchResults("4", "cocos");
    expect(Array.isArray(results)).toBe(true);

    expect(results[0]).toHaveProperty("id");
    expect(results[0]).toHaveProperty("name");
    expect(results[0]).toHaveProperty("type.name");
    expect(results[0]).toHaveProperty("gender.name");
    expect(results[0]).toHaveProperty("sport.name");
    expect(results[0]).toHaveProperty("defaultCountry.name");
    expect(results[0]).toHaveProperty("images");
  });

  test("Fetches succesfully with 0 results", async () => {
    const results = await fetchSearchResults("4", "dfgsygygthbgftznhbxfghbr");
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(0);
  });

  test("Throws error 422 when query is empty", async () => {
    await expect(fetchSearchResults("1,2,3,4", "")).rejects.toThrow(
      "Search bar cannot be empty for search"
    );
  });

  test("Handles 503 error: API unavailable", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 503,
        statusText: "Service Unavailable",
      })
    ) as jest.Mock;

    await expect(fetchSearchResults("1", "cocos")).rejects.toThrow(
      "Sport Api Error. Try again later."
    );
    (global.fetch as jest.Mock).mockRestore();
  });

  test("Handles 400 error: missing values", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        statusText: "Bad Request",
      })
    ) as jest.Mock;

    await expect(fetchSearchResults("1", "cocos")).rejects.toThrow(
      "Api query is missing some important values. Try again later."
    );
    (global.fetch as jest.Mock).mockRestore();
  });
});
