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
          Load Demo Pipeline
        </Button>
        <Button variant="danger" onClick={clearPipeline}>
          Clear Pipeline
        </Button>
      </div>

      {error ? (
        <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
          {error}
        </p>
      ) : null}
    </Card>
  );
}
