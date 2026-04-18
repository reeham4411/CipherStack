"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import Textarea from "@/components/ui/Textarea";
import { useCipherStore } from "@/store/useCipherStore";

export default function OutputPanel() {
  const outputText = useCipherStore((state) => state.outputText);

  return (
    <Card>
      <SectionTitle
        title="Final Output"
        subtitle="The result produced by the final node"
      />
      <Textarea
        value={outputText}
        readOnly
        placeholder="Output will appear here..."
        className="bg-white"
      />
    </Card>
  );
}
