import { Handle, Position } from "reactflow";

function BaseNode({ title, inputs = [], outputs = [], children }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            background: "white",
            minWidth: "150px",
            position: "relative"
        }}>
            {/* Title */}
            <h3>{title}</h3>

            {/* Content */}
            <div>
                {children}
            </div>

            {/* Left side- Inputs */}
            {inputs.map((input, index) => (
                <Handle
                  key={index}
                  type="target"
                  position={Position.Left}
                  id={input}
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