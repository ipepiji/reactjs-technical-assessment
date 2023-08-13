function selectMapper({ data = [], labelKey = "", valueKey = "" }) {
  return data.reduce((prev, curr) => {
    const obj = {
      label: curr[labelKey] || curr,
      value: curr[valueKey] || curr,
    };

    return [...prev, obj];
  }, []);
}

export { selectMapper };
