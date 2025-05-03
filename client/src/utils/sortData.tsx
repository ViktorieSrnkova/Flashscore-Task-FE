export const sortBySportName = (data: any[]) => {
  return data.sort((a, b) => a.sport.name.localeCompare(b.sport.name));
};
