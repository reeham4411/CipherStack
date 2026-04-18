export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function isUpperCase(char: string) {
  return char >= "A" && char <= "Z";
}

export function isLowerCase(char: string) {
  return char >= "a" && char <= "z";
}

export function shiftAlphaChar(char: string, shift: number) {
  if (isUpperCase(char)) {
    const base = "A".charCodeAt(0);
    const code = char.charCodeAt(0) - base;
    return String.fromCharCode(base + mod(code + shift, 26));
  }

  if (isLowerCase(char)) {
    const base = "a".charCodeAt(0);
    const code = char.charCodeAt(0) - base;
    return String.fromCharCode(base + mod(code + shift, 26));
  }

  return char;
}

export function normalizeLettersOnly(input: string) {
  return input.replace(/[^a-zA-Z]/g, "").toUpperCase();
}