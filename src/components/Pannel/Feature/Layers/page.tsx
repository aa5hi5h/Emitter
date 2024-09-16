import React from 'react';
import { useEditor, Node } from '@craftjs/core';
import { ChevronRight, ChevronDown, Trash } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayerItemProps {
  nodeId: string;
  depth?: number;
}

const LayerItem: React.FC<LayerItemProps> = ({ nodeId, depth = 0 }) => {
  const { node, actions } = useEditor((state, query) => ({
    node: state.nodes[nodeId] as Node,
  }));

  const hasChildren = node.data.nodes && node.data.nodes.length > 0;

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    actions.selectNode(nodeId);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
      actions.delete(nodeId);
  };

  return (
    <div>
      <div
        style={{
          paddingLeft: `${depth * 20}px`,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        className={`rounded-md p-2 flex justify-between ${node.events.selected ? "bg-[#c74db9]/60 hover:hover:bg-[#c74db9]/60" : "hover:bg-[#c74db9]/15"} `}
        onClick={handleSelect}
      >
        <span className={`text-sm font-medium ${node.events.selected ? "text-white " : "text-slate-800"}`}>{((node.data.displayName || node.data.name).length > 12 
  ? (node.data.displayName || node.data.name).slice(0, 15) + '...' 
  : (node.data.displayName || node.data.name))}</span>
        <span onClick={handleDelete} >
        <Trash 
            size={14} 
            className={`transition-transform  duration-300 
                        transform hover:scale-125 hover:rotate-3 active:scale-90 
                        hover:text-red-500 ${node.events.selected ? "text-white" : "text-slate-600/70"}`} 
        />
        </span>
      </div>
      {hasChildren && (
        <div>
          {node.data.nodes.map((childNodeId: string) => (
            <LayerItem key={childNodeId} nodeId={childNodeId} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const LayersPanel: React.FC = () => {
  const { nodes } = useEditor((state) => ({
    nodes: state.nodes,
  }));

  const findRootNode = (): string | undefined => {
    return Object.keys(nodes).find(id => !nodes[id].data.parent);
  };

  const rootNodeId = findRootNode();

  return (
    <ScrollArea className="h-full w-full  overflow-y-auto">
        <div className="max-h-[calc(100vh-96px)]">
            
        {rootNodeId && <LayerItem nodeId={rootNodeId} />}
      </div>
    </ScrollArea>
  );
};

export default LayersPanel;