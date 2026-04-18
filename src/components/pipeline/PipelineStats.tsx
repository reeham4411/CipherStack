"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { useCipherStore } from "@/store/useCipherStore";

export default function PipelineStats() {
  const nodes = useCipherStore((state) => state.nodes);
  const mode = useCipherStore((state) => state.mode);

  return (
    <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-semibold text-slate-900">Pipeline Status</h3>
        <p className="text-sm text-slate-500">
          At least 3 nodes are required for a valid run
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge text={`${nodes.length} node${nodes.length !== 1 ? "s" : ""}`} />
        <Badge text={mode.toUpperCase()} />
      </div>
    </Card>
  );
}
