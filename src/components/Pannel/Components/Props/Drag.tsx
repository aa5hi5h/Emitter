import { useDrag } from "react-dnd";

const DraggableElement = ({ children }: { children: React.ReactNode }) => {
  const [, drag] = useDrag(() => ({
    type: "BOX",
    item: {},
  }));

  return (
    <div  ref={(ref) => {
        if (ref) {drag}}} className="absolute">
      {children}
    </div>
  );
};

export default DraggableElement;
