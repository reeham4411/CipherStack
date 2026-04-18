export type CipherType = "caesar" | "xor" | "vigenere" | "reverse" | "base64";

export type CipherMode = "encrypt" | "decrypt";

export type CaesarConfig = {
  shift: number;
};

export type XORConfig = {
  key: string;
};

export type VigenereConfig = {
  key: string;
};

export type ReverseConfig = Record<string, never>;
export type Base64Config = Record<string, never>;

export type CipherConfigMap = {
  caesar: CaesarConfig;
  xor: XORConfig;
  vigenere: VigenereConfig;
  reverse: ReverseConfig;
  base64: Base64Config;
};

export type CipherNode<T extends CipherType = CipherType> = {
  id: string;
  type: T;
  label: string;
  config: CipherConfigMap[T];
};

export type CipherDefinition<T extends CipherType = CipherType> = {
  type: T;
  label: string;
  configurable: boolean;
  createDefaultConfig: () => CipherConfigMap[T];
  encrypt: (input: string, config: CipherConfigMap[T]) => string;
  decrypt: (input: string, config: CipherConfigMap[T]) => string;
};