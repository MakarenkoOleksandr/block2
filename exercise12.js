function isThere(arr, el) {
  const isInArr = arr.includes(el);

  if (isInArr) {
    return false;
  }

  return true;
}

module.exports = {
  isThere,
};
