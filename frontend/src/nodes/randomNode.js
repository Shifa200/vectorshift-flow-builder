import { useState } from "react";
import BaseNode from "./baseNode";

export const RandomNode = ({ id }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <BaseNode
      title="Random"
      outputs={[`${id}-random`]}
    >
      <div className="flex flex-col gap-2">

        {/* Label */}
        <span className="text-xs text-gray-500">
          Generate random number
        </span>

        {/* Min */}
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Min"
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        {/* Max */}
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Max"
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

      </div>
    </BaseNode>
  );
};