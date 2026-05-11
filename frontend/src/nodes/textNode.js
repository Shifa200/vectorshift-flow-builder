// textNode.js

import { useState, useRef } from 'react';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textRef = useRef(null);


   const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    return matches.map(match => match[1]);
  };

   const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    const vars = extractVariables(value);
    setVariables(vars);

    // auto resize
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };


  return (
      <BaseNode
       title="Text"
       inputs={variables.map(v => `${id}-${v}`)}
       outputs={[`${id}-output`]}
      >
      <textarea
        ref={textRef}
        value={currText}
        onChange={handleTextChange}
        className="w-full mt-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        rows={1}
      />
    </BaseNode>
  );
}
