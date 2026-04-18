"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import Textarea from "@/components/ui/Textarea";
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

      <div className="mb-4 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
        <button
          onClick={() => setMode("encrypt")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            mode === "encrypt"
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-600"
          }`}
        >
          Encrypt
        </button>
        <button
          onClick={() => setMode("decrypt")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            mode === "decrypt"
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-600"
          }`}
        >
          Decrypt
        </button>
      </div>

      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your input text here..."
      />
    </Card>
  );
}
