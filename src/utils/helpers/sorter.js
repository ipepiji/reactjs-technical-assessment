function objectSorter({ data = [], valueKey = "", order = "ASC" | "DESC" }) {
  return [...data].sort((a, b) =>
    order === "ASC" ? a[valueKey] - b[valueKey] : b[valueKey] - a[valueKey]
  );
}

export { objectSorter };
