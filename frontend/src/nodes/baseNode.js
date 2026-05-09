import { Handle } from "reactflow";

function BaseNode({ title, inputs = [], outputs = [], children }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            background: "white",
            minWidth: "150px"
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
                  position="left"
                  id={input}
                />
            )
            )}

            {/* Right side- Outputs */}
            {outputs.map((input, index) => (
                <Handle
                  key={index}
                  type="source"
                  position="right"
                  id={output}
                />
            )
            )}

        </div>
    )
}

export default BaseNode