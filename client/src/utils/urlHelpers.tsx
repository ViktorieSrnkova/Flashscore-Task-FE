export const getQueryFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("query") || "";
};
