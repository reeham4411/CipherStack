"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

export default function IntermediateResultsPanel() {
  const lastExecution = useCipherStore((state) => state.lastExecution);

  return (
    <Card>
      <SectionTitle
        title="Intermediate Results"
        subtitle="See what each node received and produced"
      />

      {!lastExecution || lastExecution.steps.length === 0 ? (
        <p className="text-sm text-zinc-400">
          Run the pipeline to inspect step-by-step results.
        </p>
      ) : (
        <div className="space-y-4">
          {lastExecution.steps.map(
            (step: NonNullable<typeof lastExecution>["steps"][number]) => (
              <div
                key={`${step.nodeId}-${step.stepNumber}`}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">
                      Step {step.stepNumber} — {step.nodeLabel}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {step.direction.toUpperCase()} · {step.nodeType}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase text-zinc-400">
                      Input
                    </p>
                    <div className="rounded-lg border border-zinc-800 bg-black/30 p-3 text-sm text-zinc-200 break-all">
                      {step.input || "—"}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase text-zinc-400">
                      Output
                    </p>
                    <div className="rounded-lg border border-zinc-800 bg-black/30 p-3 text-sm text-zinc-200 break-all">
                      {step.output || "—"}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </Card>
  );
}
