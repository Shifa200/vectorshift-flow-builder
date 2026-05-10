import BaseNode from "./baseNode";
import { useState } from "react";

export const FilterNode = ({id}) => {
    const [condition, setCondition] = useState("value > 10");

    const handleChange = (e) => {
        setCondition(e.target.value);
    
    };

    return (
        <BaseNode
            title="Filter"
            inputs={[`${id}-input`]}
            outputs={[`${id}-filtered`]}
        >
           <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>

            <label>
                Condition:
                <input
                    type="text"
                    value={condition}
                    onChange={handleChange}
                />
            </label>
          </div>

        </BaseNode>

    );
};
