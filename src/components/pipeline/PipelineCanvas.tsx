"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";
import PipelineNodeCard from "./PipelineNodeCard";

export default function PipelineCanvas() {
  const nodes = useCipherStore((state) => state.nodes);

  return (
    <Card>
      <SectionTitle
        title="Pipeline Builder"
        subtitle="Configure, reorder, and manage your encryption flow"
      />

      {nodes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
          No nodes added yet. Start by adding at least 3 cipher nodes.
        </div>
      ) : (
        <div className="space-y-4">
          {nodes.map((node, index) => (
            <PipelineNodeCard
              key={node.id}
              node={node}
              index={index}
              total={nodes.length}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
