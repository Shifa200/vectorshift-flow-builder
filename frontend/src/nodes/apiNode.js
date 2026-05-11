import { useState } from "react";
import BaseNode from "./baseNode";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      title="API"
      inputs={[`${id}-url`]}
      outputs={[`${id}-response`]}
    >
      <div className="flex flex-col gap-2">

        {/* Label */}
        <span className="text-xs text-gray-500">
          Fetch data from API
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter API URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

      </div>
    </BaseNode>
  );
};