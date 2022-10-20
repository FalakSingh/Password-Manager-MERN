const strToHex = (str) => {
  return Array.from(str)
    .map((char) =>
      char.charCodeAt(0) < 128
        ? char.charCodeAt(0).toString(16)
        : encodeURIComponent(char).replace(/\%/g, "").toLowerCase()
    )
    .join("");
};

const hexToString = (hex) => {
  return decodeURIComponent("%" + hex.match(/.{1,2}/g).join("%"));
};

module.exports = { strToHex, hexToString };
