import React from "react";
import { Card, CardContent, SvgIcon, useTheme } from "@mui/material";
import { useDrag } from "react-dnd";

type TFormWidgetDrag = {
  icon: React.ReactElement<typeof SvgIcon> | null;
  label: string;
  id: number;
  type?: string;
};

const FormWidgetDrag: React.FC<TFormWidgetDrag> = ({
  icon,
  label,
  id,
  type = "WIDGET",
}) => {
  const theme = useTheme();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { label, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <Card
      ref={drag}
      className={"cursor-pointer border"}
      sx={{
        "&:hover": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
        opacity: isDragging ? 0.4 : 1,
      }}
    >
      <CardContent className={"flex flex-col items-center"}>
        <SvgIcon style={{ fontSize: 70 }}>{icon}</SvgIcon>
        <p className={"font-medium text-sm"}>{label}</p>
      </CardContent>
    </Card>
  );
};

export default FormWidgetDrag;
