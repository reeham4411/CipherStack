import { CipherDefinition } from "@/types/cipher";
import { caesarDecrypt, caesarEncrypt } from "./caesar";
import { xorDecrypt, xorEncrypt } from "./xor";
import { vigenereDecrypt, vigenereEncrypt } from "./vigenere";
import { reverseDecrypt, reverseEncrypt } from "./reverse";
import { base64Decrypt, base64Encrypt } from "./base64";

export const cipherRegistry = {
  caesar: {
    type: "caesar",
    label: "Caesar Cipher",
    configurable: true,
    createDefaultConfig: () => ({ shift: 3 }),
    encrypt: caesarEncrypt,
    decrypt: caesarDecrypt,
  },
  xor: {
    type: "xor",
    label: "XOR Cipher",
    configurable: true,
    createDefaultConfig: () => ({ key: "abc" }),
    encrypt: xorEncrypt,
    decrypt: xorDecrypt,
  },
  vigenere: {
    type: "vigenere",
    label: "Vigenère Cipher",
    configurable: true,
    createDefaultConfig: () => ({ key: "SECRET" }),
    encrypt: vigenereEncrypt,
    decrypt: vigenereDecrypt,
  },
  reverse: {
    type: "reverse",
    label: "Reverse",
    configurable: false,
    createDefaultConfig: () => ({}),
    encrypt: reverseEncrypt,
    decrypt: reverseDecrypt,
  },
  base64: {
    type: "base64",
    label: "Base64",
    configurable: false,
    createDefaultConfig: () => ({}),
    encrypt: base64Encrypt,
    decrypt: base64Decrypt,
  },
} as Record<string, CipherDefinition>;