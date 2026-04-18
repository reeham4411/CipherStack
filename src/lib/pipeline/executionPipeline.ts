import { cipherRegistry } from "@/lib/ciphers/registry";
import { CipherMode, CipherNode } from "@/types/cipher";

type ExecutionStep = {
  stepNumber: number;
  nodeId: string;
  nodeLabel: string;
  nodeType: string;
  direction: CipherMode;
  input: string;
  output: string;
  configSnapshot: unknown;
};

type ExecutionResult = {
  success: boolean;
  mode: CipherMode;
  initialInput: string;
  finalOutput: string;
  steps: ExecutionStep[];
  error?: string;
};

export function executePipeline(
  nodes: CipherNode[],
  input: string,
  mode: CipherMode
): ExecutionResult {
  try {
    const orderedNodes = mode === "encrypt" ? nodes : [...nodes].reverse();
    const steps: ExecutionStep[] = [];

    let currentValue = input;

    orderedNodes.forEach((node, index) => {
      const definition = cipherRegistry[node.type];
      const stepInput = currentValue;

      currentValue =
        mode === "encrypt"
          ? definition.encrypt(stepInput, node.config as never)
          : definition.decrypt(stepInput, node.config as never);

      steps.push({
        stepNumber: index + 1,
        nodeId: node.id,
        nodeLabel: node.label,
        nodeType: node.type,
        direction: mode,
        input: stepInput,
        output: currentValue,
        configSnapshot: node.config,
      });
    });

    return {
      success: true,
      mode,
      initialInput: input,
      finalOutput: currentValue,
      steps,
    };
  } catch (error) {
    return {
      success: false,
      mode,
      initialInput: input,
      finalOutput: "",
      steps: [],
      error: error instanceof Error ? error.message : "Execution failed.",
    };
  }
}