// llmNode.js

import BaseNode from "./baseNode";

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode 
    title="LLM"
    inputs={[`${id}-system`, `${id}-prompt`]}
    outputs={[`${id}-response`]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
