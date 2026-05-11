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
           <div className="flex flex-col gap-2">

            <label  className="text-xs text-gray-600">
                Condition:
                <input
                    className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    type="text"
                    value={condition}
                    onChange={handleChange}
                />
            </label>
          </div>

        </BaseNode>

    );
};
