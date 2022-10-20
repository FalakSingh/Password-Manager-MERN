const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const crypto = require("crypto");
const { strToHex } = require("./strHex");
const algorithm = "aes-256-ctr";
const keyHex = process.env.CRYPTO_SECRET_KEY;
const ivHex = process.env.CRYPTO_IV_HEX;

const encrypt = (text, passKey) => {
  passKey = passKey.replace(/[^a-zA-Z ]/g, "");
  const key = `${strToHex(passKey)}${keyHex}`.substring(0, 64);
  let cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(key, "hex"),
    Buffer.from(ivHex, "hex")
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
};

const decrypt = (hex, passKey) => {
  passKey = passKey.replace(/[^a-zA-Z ]/g, "");
  const key = `${strToHex(passKey)}${keyHex}`.substring(0, 64);
  let decipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(key, "hex"),
    Buffer.from(ivHex, "hex")
  );
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(hex, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString();
};

module.exports = { encrypt, decrypt };
