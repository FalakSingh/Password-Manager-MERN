require("dotenv").config();
const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = process.env.CRYPTO_SECRET_KEY;
const randBytesHex = process.env.CRYPTO_HEX;

const encrypt = (text) => {
  const iv = Buffer.from(randBytesHex, "hex");
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    content: encrypted.toString("hex"),
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(randBytesHex, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};



module.exports = { encrypt, decrypt };
