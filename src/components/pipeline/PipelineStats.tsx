"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useCipherStore } from "@/store/useCipherStore";

export default function PipelineStats() {
  const nodes = useCipherStore((state) => state.nodes);
  const mode = useCipherStore((state) => state.mode);

  return (
    <Card className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-white">Pipeline Status</h3>
        <p className="text-sm text-zinc-400">
          Minimum 3 nodes required for valid execution
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge text={`${nodes.length} node${nodes.length !== 1 ? "s" : ""}`} />
        <Badge text={mode.toUpperCase()} />
      </div>
    </Card>
  );
}
