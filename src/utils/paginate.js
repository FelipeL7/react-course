import _ from "lodash";
// items = array of elements
// pageNumber = current page
// pageSize = lenght of each page

export function paginate(items, pageNumber, pageSize) {
  // Calculate the index of the items on pageNumber
  const startIndex = (pageNumber - 1) * pageSize;
  // Lodash will going to use the startIndex to take all pages

  // _.slice(items, startIndex) slice the array starting in the startIndex

  // _.take() take items for the current page
  // _(items) returns a lodash object and we can chain methods to it
  return _(items).slice(startIndex).take(pageSize).value();
  //.value will return a regular array
}
