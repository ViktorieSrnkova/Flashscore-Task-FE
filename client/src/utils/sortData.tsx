export const sortBySportName = (data: any[]) => {
  data.forEach((item) => {
    if (typeof item.sport?.name !== "string") {
      throw new Error(`Invalid sport name in object: ${JSON.stringify(item)}`);
    }
  });

  return data.sort((a, b) => a.sport.name.localeCompare(b.sport.name));
};
