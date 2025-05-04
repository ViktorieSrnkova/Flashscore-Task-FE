export const handleTypeFormatting = (str: string) => {
  if (!/[A-Z]/.test(str)) {
    return str;
  }
  const result = str.replace(/([A-Z])/g, " $1").trim();
  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};
