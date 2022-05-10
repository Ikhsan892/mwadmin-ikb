import React from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";

type TFormWrapperDrop = {
  onDrop: (item: any, monitor: DropTargetMonitor<any, {}>) => {} | undefined;
  children: any;
};

const FormWrapperDrop: React.FC<TFormWrapperDrop> = ({ onDrop, children }) => {
  const [data, drop] = useDrop({
    accept: "WIDGET",
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{ minHeight: "80vh" }}
      className={"border w-full p-3 border-dashed rounded-lg"}
    >
      {children}
    </div>
  );
};

export default FormWrapperDrop;
