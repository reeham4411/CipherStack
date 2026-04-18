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
        subtitle="Inspect what each node received and produced"
      />

      {!lastExecution || lastExecution.steps.length === 0 ? (
        <p className="text-sm text-slate-500">
          Run the pipeline to view step-by-step transformations.
        </p>
      ) : (
        <div className="space-y-4">
          {lastExecution.steps.map((step) => (
            <div
              key={`${step.nodeId}-${step.stepNumber}`}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Step {step.stepNumber} — {step.nodeLabel}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {step.direction.toUpperCase()} · {step.nodeType}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Input
                  </p>
                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 break-all">
                    {step.input || "—"}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Output
                  </p>
                  <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 break-all">
                    {step.output || "—"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
