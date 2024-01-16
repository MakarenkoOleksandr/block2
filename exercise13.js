function characterRemover(str, charToRmv) {
  return str.split(charToRmv).join(" ");
}

module.exports = {
  characterRemover,
};
