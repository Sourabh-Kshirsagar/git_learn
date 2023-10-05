// In this way we created our hook and export this as a named export to import anywhere we want
// this will increase the code useability, modularity and performance and code Become more testable

export function filterData(searchText, allRestroData) {
  const filteredData = allRestroData.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filteredData;
}
