"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

export default function InputPanel() {
  const inputText = useCipherStore((state) => state.inputText);
  const setInputText = useCipherStore((state) => state.setInputText);
  const mode = useCipherStore((state) => state.mode);
  const setMode = useCipherStore((state) => state.setMode);

  return (
    <Card>
      <SectionTitle
        title="Input"
        subtitle="Enter plaintext for encryption or ciphertext for decryption"
      />

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setMode("encrypt")}
          className={`rounded-xl px-4 py-2 text-sm font-medium ${
            mode === "encrypt"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-300"
          }`}
        >
          Encrypt
        </button>
        <button
          onClick={() => setMode("decrypt")}
          className={`rounded-xl px-4 py-2 text-sm font-medium ${
            mode === "decrypt"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-300"
          }`}
        >
          Decrypt
        </button>
      </div>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your input text here..."
        className="min-h-40 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-blue-600"
      />
    </Card>
  );
}
