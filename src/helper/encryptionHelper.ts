import cjs from "crypto-js";

function encrypt(data: string, key: string): string {
  return cjs.AES.encrypt(data, key).toString();
}

function decrypt(data: string, key: string): string {
  return cjs.AES.decrypt(data, key).toString(cjs.enc.Utf8);
}

export { encrypt, decrypt };
