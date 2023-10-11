export function filterData(searchText, allRestroData) {
  const filteredData = allRestroData.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filteredData;
}
