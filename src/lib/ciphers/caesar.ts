import { CaesarConfig } from "@/types/cipher";
import { shiftAlphaChar } from "./helpers";

export function caesarEncrypt(input: string, config: CaesarConfig) {
  return input
    .split("")
    .map((char) => shiftAlphaChar(char, config.shift))
    .join("");
}

export function caesarDecrypt(input: string, config: CaesarConfig) {
  return input
    .split("")
    .map((char) => shiftAlphaChar(char, -config.shift))
    .join("");
}