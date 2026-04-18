"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

export default function OutputPanel() {
  const outputText = useCipherStore((state) => state.outputText);

  return (
    <Card>
      <SectionTitle
        title="Final Output"
        subtitle="The last node output appears here"
      />
      <textarea
        value={outputText}
        readOnly
        placeholder="Output will appear here..."
        className="w-full min-h-30 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400"
      />
    </Card>
  );
}
