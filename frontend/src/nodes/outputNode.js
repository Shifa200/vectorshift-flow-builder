// outputNode.js

import { useState } from 'react';
import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
     <BaseNode
     title="Output"
     inputs={[`${id}-value`]}
     >

      <div className="flex flex-col gap-2">
        
        <label className="text-xs text-gray-600">
          Name:
          <input 
            className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label className="text-xs text-gray-600">
          Type:
          <select 
          className= "w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={outputType}
          onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
