import { useState } from "react";
import BaseNode from "./baseNode";

export const DelayNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode
      title="Delay"
      inputs={[`${id}-input`]}
      outputs={[`${id}-delayed`]}
    >
      <div className="flex flex-col gap-2">

        {/* Description */}
        <span className="text-xs text-gray-500">
          Delay execution
        </span>

        {/* Input */}
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Unit */}
        <span className="text-xs text-gray-400">
          milliseconds (ms)
        </span>

      </div>
    </BaseNode>
  );
};