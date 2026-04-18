"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

const items = [
  { type: "caesar", label: "Caesar Cipher", note: "Shift-based, configurable" },
  { type: "xor", label: "XOR Cipher", note: "Key-based, configurable" },
  {
    type: "vigenere",
    label: "Vigenère Cipher",
    note: "Keyword-based, configurable",
  },
  { type: "reverse", label: "Reverse", note: "Bonus extra" },
  { type: "base64", label: "Base64", note: "Bonus extra" },
] as const;

export default function CipherLibrary() {
  const addNode = useCipherStore((state) => state.addNode);

  return (
    <Card>
      <SectionTitle
        title="Cipher Library"
        subtitle="Add ciphers to the pipeline"
      />

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.type}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-3"
          >
            <div className="mb-2">
              <h3 className="font-medium text-white">{item.label}</h3>
              <p className="text-xs text-zinc-400">{item.note}</p>
            </div>

            <Button className="w-full" onClick={() => addNode(item.type)}>
              Add Node
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
