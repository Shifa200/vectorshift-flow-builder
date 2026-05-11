import { useState } from "react";
import BaseNode from "./baseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("add");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <BaseNode
      title="Math"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-result`]}
    >
      <div className="flex flex-col gap-2">

        {/* Operation */}
        <label className="text-xs text-gray-600">
          Operation:
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (-)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (÷)</option>
          </select>
        </label>

        {/* Input A */}
        <input
          type="number"
          placeholder="Value A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Input B */}
        <input
          type="number"
          placeholder="Value B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

      </div>
    </BaseNode>
  );
};