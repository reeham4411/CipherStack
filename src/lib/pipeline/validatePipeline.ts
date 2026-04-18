import { CipherNode } from "@/types/cipher";

export function validatePipeline(nodes: CipherNode[], input: string) {
  if (nodes.length < 3) {
    return "Pipeline must contain at least 3 nodes.";
  }

  if (!input.trim()) {
    return "Please enter input text.";
  }

  return null;
}