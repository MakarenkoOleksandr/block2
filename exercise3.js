function swap(arr, arr2, index) {
  const result = [];
  const sliceArr = arr.splice(index, 1, arr2[index]).join("");
  const sliceArr2 = arr2.splice(index, 1, arr[index]).join("");

  arr.splice(index, 1, sliceArr2);
  arr2.splice(index, 1, sliceArr);

  result.push(arr, arr2);

  return result;
}

module.exports = {
  swap,
};
