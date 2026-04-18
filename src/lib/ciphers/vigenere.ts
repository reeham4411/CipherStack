import { VigenereConfig } from "@/types/cipher";
import { mod } from "./helpers";

function shiftChar(char: string, keyShift: number, decrypt = false) {
  const code = char.charCodeAt(0);

  if (char >= "A" && char <= "Z") {
    const base = 65;
    const offset = code - base;
    const finalShift = decrypt ? -keyShift : keyShift;
    return String.fromCharCode(base + mod(offset + finalShift, 26));
  }

  if (char >= "a" && char <= "z") {
    const base = 97;
    const offset = code - base;
    const finalShift = decrypt ? -keyShift : keyShift;
    return String.fromCharCode(base + mod(offset + finalShift, 26));
  }

  return char;
}

function validateKey(key: string) {
  const cleaned = key.replace(/[^a-zA-Z]/g, "");
  if (!cleaned) {
    throw new Error("Vigenère key must contain letters.");
  }
  return cleaned;
}

export function vigenereEncrypt(input: string, config: VigenereConfig) {
  const cleanKey = validateKey(config.key);
  let keyIndex = 0;

  return input
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) return char;

      const shift =
        cleanKey[keyIndex++ % cleanKey.length].toUpperCase().charCodeAt(0) - 65;

      return shiftChar(char, shift, false);
    })
    .join("");
}

export function vigenereDecrypt(input: string, config: VigenereConfig) {
  const cleanKey = validateKey(config.key);
  let keyIndex = 0;

  return input
    .split("")
    .map((char) => {
      if (!/[a-zA-Z]/.test(char)) return char;

      const shift =
        cleanKey[keyIndex++ % cleanKey.length].toUpperCase().charCodeAt(0) - 65;

      return shiftChar(char, shift, true);
    })
    .join("");
}