"use client";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { CipherNode } from "@/types/cipher";
import { useCipherStore } from "@/store/useCipherStore";

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

  return (
    <Card className="relative">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-300">
            Node {index + 1}
          </p>
          <h3 className="text-lg font-semibold text-white">{node.label}</h3>
          <p className="text-sm text-zinc-400">Type: {node.type}</p>
        </div>

        <div className="flex gap-2">
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
            <label className="mb-1 block text-sm text-zinc-300">Shift</label>
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
            <label className="mb-1 block text-sm text-zinc-300">Key</label>
            <Input
              value={(node.config as { key: string }).key}
              onChange={(e) => updateNodeConfig(node.id, "key", e.target.value)}
            />
          </div>
        )}

        {node.type === "vigenere" && (
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Keyword</label>
            <Input
              value={(node.config as { key: string }).key}
              onChange={(e) => updateNodeConfig(node.id, "key", e.target.value)}
            />
          </div>
        )}

        {(node.type === "reverse" || node.type === "base64") && (
          <p className="text-sm text-zinc-400">
            No configuration needed for this node.
          </p>
        )}
      </div>
    </Card>
  );
}
