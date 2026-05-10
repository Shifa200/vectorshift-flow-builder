import BaseNode from "./baseNode";

export const MathNode = ({id}) => {
    return (
        <BaseNode
          title="Math"
          inputs={[`${id}-a`,`${id}-b`]}
          outputs={[`${id}-result`]}
        >
            <div>
                <span>Add Two Numbers</span>
            </div>
        </BaseNode>
    );
};