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
        subtitle="Reorder, configure, and remove nodes"
      />

      {nodes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center text-zinc-400">
          No nodes added yet. Add at least 3 cipher nodes.
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
