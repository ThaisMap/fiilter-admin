const sortByDate = (a: { date: Date }, b: { date: Date }) => {
  if (a.date < b.date) {
    return -1
  }
  if (b.date < a.date) {
    return 1
  }
  return 0
}

function dynamicSort(property) {
  var sortOrder = 1

  if (property[0] === "-") {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a, b) {
    if (a[property] > b[property]) {
      return sortOrder
    }
    if (a[property] < b[property]) {
      return -1 * sortOrder
    }
    return 0
  }
}

export { sortByDate, dynamicSort }
