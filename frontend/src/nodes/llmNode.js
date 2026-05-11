import { useState } from "react";
import BaseNode from "./baseNode";

export const LLMNode = ({ id }) => {
  const [system, setSystem] = useState("");
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gpt-3.5");

  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div className="flex flex-col gap-2">

        {/* Model */}
        <label className="text-xs text-gray-600">
          Model:
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="gpt-3.5">GPT-3.5</option>
            <option value="gpt-4">GPT-4</option>
          </select>
        </label>

        {/* System */}
        <label className="text-xs text-gray-600">
          System:
          <input
            type="text"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
            placeholder="System instructions..."
            className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </label>

        {/* Prompt */}
        <label className="text-xs text-gray-600">
          Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt..."
            className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </label>

      </div>
    </BaseNode>
  );
};