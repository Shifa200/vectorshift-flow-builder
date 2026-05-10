import BaseNode from "./baseNode";

export const APINode = ({ id }) => {
    return (
        <BaseNode
           title = "API"
           inputs = {[`${id}-url`]}
           outputs={[`${id}-response`]}
        >

            <div>
                <span>Fetch data from API</span>
            </div>
            <h7 className="text-3xl font-bold text-blue-500">
  Tailwind Working
</h7>
        </BaseNode>
        
    );
};