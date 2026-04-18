"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";

function getSecurityAnalysis(nodes: Array<{ type: string }>) {
  const totalNodes = nodes.length;
  const uniqueTypes = new Set(nodes.map((node) => node.type)).size;
  const configurableCount = nodes.filter((node) =>
    ["caesar", "xor", "vigenere"].includes(node.type),
  ).length;

  let score = 0;

  score += Math.min(totalNodes * 20, 40);
  score += Math.min(uniqueTypes * 15, 30);
  score += Math.min(configurableCount * 10, 30);

  if (totalNodes < 3) score = Math.min(score, 35);

  let label = "Weak";
  let tone = "text-rose-600";
  let bar = "bg-rose-500";

  if (score >= 70) {
    label = "Strong";
    tone = "text-emerald-600";
    bar = "bg-emerald-500";
  } else if (score >= 45) {
    label = "Moderate";
    tone = "text-amber-600";
    bar = "bg-amber-500";
  }

  let summary =
    "Add more layers and configurable ciphers to strengthen the pipeline.";

  if (score >= 70) {
    summary =
      "This pipeline has good layering and cipher diversity, which makes it comparatively stronger.";
  } else if (score >= 45) {
    summary =
      "This pipeline is reasonably layered, but adding more diversity would improve it further.";
  }

  return {
    score,
    label,
    tone,
    bar,
    totalNodes,
    uniqueTypes,
    configurableCount,
    summary,
  };
}

export default function SecurityMeter() {
  const nodes = useCipherStore((state) => state.nodes);
  const analysis = getSecurityAnalysis(nodes);

  return (
    <Card>
      <SectionTitle
        title="Pipeline Security Meter"
        subtitle="Quick estimate based on layering and cipher diversity"
      />

      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-bold text-slate-900">
            {analysis.score}/100
          </p>
          <p className={`text-sm font-semibold ${analysis.tone}`}>
            {analysis.label}
          </p>
        </div>

        <div className="text-right text-sm text-slate-500">
          <p>Layers: {analysis.totalNodes}</p>
          <p>Unique Ciphers: {analysis.uniqueTypes}</p>
          <p>Configurable Nodes: {analysis.configurableCount}</p>
        </div>
      </div>

      <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${analysis.bar} transition-all duration-500`}
          style={{ width: `${analysis.score}%` }}
        />
      </div>

      <p className="text-sm text-slate-600">{analysis.summary}</p>
    </Card>
  );
}
