import React from 'react';
import { useEditor, Node } from '@craftjs/core';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface LayerItemProps {
  nodeId: string;
  depth?: number;
}

const LayerItem: React.FC<LayerItemProps> = ({ nodeId, depth = 0 }) => {
  const { node, actions } = useEditor((state, query) => ({
    node: state.nodes[nodeId] as Node,
  }));

  const [isExpanded, setIsExpanded] = React.useState(true);

  const hasChildren = node.data.nodes && node.data.nodes.length > 0;

  const handleSelect = () => {
    actions.selectNode(nodeId);
  };

  return (
    <div>
      <div 
        style={{ 
          paddingLeft: `${depth * 20}px`,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: node.events.selected ? '#e0e0e0' : 'transparent',
        }}
        onClick={handleSelect}
      >
        <span>{node.data.displayName || node.data.name}</span>
      </div>
      {hasChildren && (
        <div>
          {node.data.nodes.map((childNodeId) => (
            <LayerItem key={childNodeId} nodeId={childNodeId} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const LayersPanel: React.FC = () => {
  const { nodes, selected } = useEditor((state) => ({
    nodes: state.nodes,
    selected: state.events.selected,
  }));

  
  const renderLayerItems = (nodeIds: string | Set<string>) => {
    if (typeof nodeIds === 'string') {
      return <LayerItem nodeId={nodeIds} />;
    } else if (nodeIds instanceof Set) {
      return Array.from(nodeIds).map((id) => <LayerItem key={id} nodeId={id} />);
    }
    return null;
  };


  const findRootNode = (): string | undefined => {
    return Object.keys(nodes).find(id => !nodes[id].data.parent);
  };

  const rootNodeId = selected && selected.size > 0 ? selected : findRootNode();

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Layers</h3>
      <div className="border rounded">
        {rootNodeId && renderLayerItems(rootNodeId)}
      </div>
    </div>
  );
};

export default LayersPanel;