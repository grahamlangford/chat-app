const utils = {
  objToSortedArray: obj => {
    return Object.values(obj).sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    )
  }
}

export default utils
