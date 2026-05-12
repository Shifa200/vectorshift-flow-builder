import { Handle, Position } from "reactflow";

function BaseNode({ title, inputs = [], outputs = [], children }) {
    return (
            <div className="bg-white-2xl shadow-sm border border-gray-200 p-4 min-w-[180px] relative transition hover:shadow-1g hover:scale-[1.02]">

            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                {title}
              </span>
            </div>

            {/* Content */}
            <div className="text-sm text-gray-600 space-y-2">
                {children}
            </div>

            {/* Left side- Inputs */}
            {inputs.map((input, index) => (
                <Handle
                  key={index}
                  type="target"
                  position={Position.Left}
                  id={input}
                  className="!bg-blue-500 !w-3 !h-3 hover: !scale-125 transition"
                  style={{
                    top: `${(index + 1) * (100 / (inputs.length + 1))}%`,
                  }}
                />
            )
            )}

            {/* Right side- Outputs */}
            {outputs.map((output, index) => (
                <Handle
                  key={index}
                  type="source"
                  position={Position.Right}
                  id={output}
                  className="!bg-green-500 !w-3 !h-3 hover: !scale-125 transition"
                  style={{
                    top: `${(index + 1) * (100 / (outputs.length + 1))}%`,
                  }}
                />
            )
            )}

        </div>
    )
}

export default BaseNode