export function base64Encrypt(input: string) {
  if (typeof window === "undefined") {
    return Buffer.from(input, "utf-8").toString("base64");
  }

  return btoa(unescape(encodeURIComponent(input)));
}

export function base64Decrypt(input: string) {
  try {
    if (typeof window === "undefined") {
      return Buffer.from(input, "base64").toString("utf-8");
    }

    return decodeURIComponent(escape(atob(input)));
  } catch {
    throw new Error("Invalid Base64 input.");
  }
}