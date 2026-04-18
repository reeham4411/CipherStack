"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

const items = [
  { type: "caesar", label: "Caesar Cipher", note: "Shift-based configuration" },
  { type: "xor", label: "XOR Cipher", note: "Repeating key configuration" },
  {
    type: "vigenere",
    label: "Vigenère Cipher",
    note: "Keyword-based configuration",
  },
  { type: "reverse", label: "Reverse", note: "Simple inversion utility" },
  { type: "base64", label: "Base64", note: "Encoding / decoding utility" },
] as const;

export default function CipherLibrary() {
  const addNode = useCipherStore((state) => state.addNode);

  return (
    <Card>
      <SectionTitle
        title="Cipher Library"
        subtitle="Add algorithms to your pipeline"
      />

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.type}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4"
          >
            <div className="mb-3">
              <h3 className="font-semibold text-slate-800">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-500">{item.note}</p>
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
