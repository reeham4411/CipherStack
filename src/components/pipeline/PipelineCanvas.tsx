"use client";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTile";
import { useCipherStore } from "@/store/useCipherStore";
import PipelineNodeCard from "./PipelineNodeCard";

import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function PipelineCanvas() {
  const nodes = useCipherStore((state) => state.nodes);
  const reorderNodes = useCipherStore((state) => state.reorderNodes);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    reorderNodes(String(active.id), String(over.id));
  }

  return (
    <Card>
      <SectionTitle
        title="Pipeline Builder"
        subtitle="Drag nodes using the dot handle to reorder the pipeline."
      />

      {nodes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
          No nodes added yet. Start by adding at least 3 cipher nodes.
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={nodes.map((node) => node.id)}
            strategy={verticalListSortingStrategy}
          >
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
          </SortableContext>
        </DndContext>
      )}
    </Card>
  );
}
