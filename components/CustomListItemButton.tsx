import React from "react";
import { styled } from "@mui/material/styles";
import { ButtonBaseProps, ListItemButton } from "@mui/material";

interface ICustomListItemButton extends ButtonBaseProps {
  open?: boolean;
  selected?: boolean;
}

const SListItemButton = styled(ListItemButton)<ICustomListItemButton>(
  ({ theme, selected, open }) => ({
    ...(selected && {
      borderLeft: `3px solid blue`,
      overflow: "hidden",
      color: "#2F80ED",
      backgroundColor: "rgba(47, 128, 237, 0.09) !important",
      "& .MuiListItemIcon-root": {
        color: "#2F80ED",
      },
      "& .MuiListItemText-primary": {
        fontWeight: 700,
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    }),
    ...(!open && {
      "& .MuiListItemText-primary": {
        display: "none",
      },
    }),
    "& .MuiListItemText-primary": {
      fontWeight: 500,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })
);

export const CustomListItemButton: React.FC<ICustomListItemButton> = ({
  open,
  children,
  selected,
}) => {
  return (
    <SListItemButton open={open} selected={selected}>
      {children}
    </SListItemButton>
  );
};
