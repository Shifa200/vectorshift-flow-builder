export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="
        px-4 py-2
        bg-white
        border border-gray-200
        rounded-xl
        shadow-sm
        cursor-grab
        active:cursor-grabbing
        flex items-center justify-center
        text-sm font-medium text-gray-700
        hover:bg-blue-50
        hover:shadow-md
        transition
      "
    >
      {label}
    </div>
  );
};