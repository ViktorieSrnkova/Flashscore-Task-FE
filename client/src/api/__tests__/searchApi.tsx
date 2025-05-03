export const fetchSearchResults = async (
  ids: string,
  query: string
): Promise<any[]> => {
  const cacheKey = `${ids}-${query}`;
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const url = `https://s.livesport.services/api/v2/search?type-ids=${ids}&project-type-id=1&project-id=602&lang-id=1&q=${query}&sport-ids=1,2,3,4,5,6,7,8,9`;
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    switch (response.status) {
      case 503:
        throw new Error("Sport Api Error. Try again later.");
      case 422:
        throw new Error("Search bar cannot be empty for search");
      case 400:
        throw new Error(
          "Api query is missing some important values. Try again later."
        );
      default:
        break;
    }
  }

  const result = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify(result));
  return result;
};
