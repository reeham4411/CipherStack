import { XORConfig } from "@/types/cipher";

function stringToHex(input: string) {
  return Array.from(input)
    .map((ch) => ch.charCodeAt(0).toString(16).padStart(2, "0"))
    .join("");
}

function hexToString(hex: string) {
  if (hex.length % 2 !== 0) {
    throw new Error("Invalid XOR hex input.");
  }

  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16);
    result += String.fromCharCode(byte);
  }
  return result;
}

export function xorEncrypt(input: string, config: XORConfig) {
  if (!config.key) {
    throw new Error("XOR key is required.");
  }

  let raw = "";
  for (let i = 0; i < input.length; i++) {
    const value =
      input.charCodeAt(i) ^ config.key.charCodeAt(i % config.key.length);
    raw += String.fromCharCode(value);
  }

  return stringToHex(raw);
}

export function xorDecrypt(input: string, config: XORConfig) {
  if (!config.key) {
    throw new Error("XOR key is required.");
  }

  const raw = hexToString(input);

  let result = "";
  for (let i = 0; i < raw.length; i++) {
    const value =
      raw.charCodeAt(i) ^ config.key.charCodeAt(i % config.key.length);
    result += String.fromCharCode(value);
  }

  return result;
}