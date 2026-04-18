import { create } from "zustand";
import { cipherRegistry } from "@/lib/ciphers/registry";
import { executePipeline } from "@/lib/pipeline/executionPipeline";
import { validatePipeline } from "@/lib/pipeline/validatePipeline";
import { CipherMode, CipherNode, CipherType } from "@/types/cipher";
import { makeId } from "@/lib/utils/ids";

type CipherStore = {
  mode: CipherMode;
  inputText: string;
  outputText: string;
  nodes: CipherNode[];
  lastExecution: ReturnType<typeof executePipeline> | null;
  error: string | null;

  setMode: (mode: CipherMode) => void;
  setInputText: (value: string) => void;

  addNode: (type: CipherType) => void;
  removeNode: (id: string) => void;
  moveNodeUp: (id: string) => void;
  moveNodeDown: (id: string) => void;
  updateNodeConfig: (id: string, key: string, value: string | number) => void;

  runPipeline: () => void;
  clearPipeline: () => void;
  loadDemoPipeline: () => void;
};

export const useCipherStore = create<CipherStore>((set, get) => ({
  mode: "encrypt",
  inputText: "hello world",
  outputText: "",
  nodes: [],
  lastExecution: null,
  error: null,

  setMode: (mode) => set({ mode }),
  setInputText: (value) => set({ inputText: value }),

  addNode: (type) => {
    const def = cipherRegistry[type];
    const node: CipherNode = {
      id: makeId(),
      type,
      label: def.label,
      config: def.createDefaultConfig() as never,
    };

    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },

  removeNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
    })),

  moveNodeUp: (id) =>
    set((state) => {
      const index = state.nodes.findIndex((node) => node.id === id);
      if (index <= 0) return state;

      const copy = [...state.nodes];
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return { nodes: copy };
    }),

  moveNodeDown: (id) =>
    set((state) => {
      const index = state.nodes.findIndex((node) => node.id === id);
      if (index === -1 || index >= state.nodes.length - 1) return state;

      const copy = [...state.nodes];
      [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
      return { nodes: copy };
    }),

  updateNodeConfig: (id, key, value) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              config: {
                ...(node.config as Record<string, string | number>),
                [key]: value,
              } as CipherNode["config"],
            }
          : node
      ),
    })),

  runPipeline: () => {
    const { nodes, inputText, mode } = get();
    const validationError = validatePipeline(nodes, inputText);

    if (validationError) {
      set({
        error: validationError,
        outputText: "",
        lastExecution: null,
      });
      return;
    }

    const result = executePipeline(nodes, inputText, mode);

    if (!result.success) {
      set({
        error: result.error ?? "Execution failed.",
        outputText: "",
        lastExecution: result,
      });
      return;
    }

    set({
      error: null,
      outputText: result.finalOutput,
      lastExecution: result,
    });
  },

  clearPipeline: () =>
    set({
      nodes: [],
      outputText: "",
      lastExecution: null,
      error: null,
    }),

  loadDemoPipeline: () =>
    set({
      nodes: [
        {
          id: makeId(),
          type: "caesar",
          label: "Caesar Cipher",
          config: { shift: 3 },
        },
        {
          id: makeId(),
          type: "xor",
          label: "XOR Cipher",
          config: { key: "abc" },
        },
        {
          id: makeId(),
          type: "vigenere",
          label: "Vigenère Cipher",
          config: { key: "SECRET" },
        },
      ],
      error: null,
      outputText: "",
      lastExecution: null,
    }),
}));