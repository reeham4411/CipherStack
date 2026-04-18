"use client";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { CipherNode } from "@/types/cipher";
import { useCipherStore } from "@/store/useCipherStore";
import { GripVertical } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function PipelineNodeCard({
  node,
  index,
  total,
}: {
  node: CipherNode;
  index: number;
  total: number;
}) {
  const removeNode = useCipherStore((state) => state.removeNode);
  const moveNodeUp = useCipherStore((state) => state.moveNodeUp);
  const moveNodeDown = useCipherStore((state) => state.moveNodeDown);
  const updateNodeConfig = useCipherStore((state) => state.updateNodeConfig);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: node.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card
        className={`border border-slate-200 ${
          isDragging ? "shadow-2xl ring-2 ring-sky-200" : ""
        }`}
      >
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <button
              type="button"
              {...attributes}
              {...listeners}
              className="mt-1 rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Drag to reorder"
              title="Drag to reorder"
            >
              <GripVertical size={16} />
            </button>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                Node {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                {node.label}
              </h3>
              <p className="text-sm text-slate-500">Type: {node.type}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              onClick={() => moveNodeUp(node.id)}
              disabled={index === 0}
            >
              ↑
            </Button>
            <Button
              variant="secondary"
              onClick={() => moveNodeDown(node.id)}
              disabled={index === total - 1}
            >
              ↓
            </Button>
            <Button variant="danger" onClick={() => removeNode(node.id)}>
              Remove
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {node.type === "caesar" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Shift
              </label>
              <Input
                type="number"
                value={(node.config as { shift: number }).shift}
                onChange={(e) =>
                  updateNodeConfig(node.id, "shift", Number(e.target.value))
                }
              />
            </div>
          )}

          {node.type === "xor" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Key
              </label>
              <Input
                value={(node.config as { key: string }).key}
                onChange={(e) =>
                  updateNodeConfig(node.id, "key", e.target.value)
                }
              />
            </div>
          )}

          {node.type === "vigenere" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Keyword
              </label>
              <Input
                value={(node.config as { key: string }).key}
                onChange={(e) =>
                  updateNodeConfig(node.id, "key", e.target.value)
                }
              />
            </div>
          )}

          {(node.type === "reverse" || node.type === "base64") && (
            <p className="text-sm text-slate-500">
              No configuration needed for this node.
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}
