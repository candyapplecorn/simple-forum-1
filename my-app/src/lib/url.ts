export const toUrl = (s: string) =>
  s.replace(/\W/g, " ").replace(/\s+/g, "-").toLowerCase();
