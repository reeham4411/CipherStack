"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useCipherStore } from "@/store/useCipherStore";

export default function ExecutionControls() {
  const runPipeline = useCipherStore((state) => state.runPipeline);
  const clearPipeline = useCipherStore((state) => state.clearPipeline);
  const loadDemoPipeline = useCipherStore((state) => state.loadDemoPipeline);
  const error = useCipherStore((state) => state.error);

  return (
    <Card>
      <div className="flex flex-wrap gap-3">
        <Button onClick={runPipeline}>Run Pipeline</Button>
        <Button variant="secondary" onClick={loadDemoPipeline}>
          Load Demo 3-Node Pipeline
        </Button>
        <Button variant="danger" onClick={clearPipeline}>
          Clear Pipeline
        </Button>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </Card>
  );
}
