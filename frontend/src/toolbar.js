// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div  className="p-4 bg-gray-100 border-b shadow-sm flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='random' label='Random' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='delay' label='Delay' />
            </div>
        </div>
    );
};
