import React from "react";
import { styled } from "@mui/material/styles";
import {
  ExtendButtonBase,
  ListItemButton,
  ListItemButtonProps,
  ListItemButtonTypeMap,
} from "@mui/material";

interface ICustomListItemButton extends ListItemButtonProps {
  open?: boolean;
  selected?: boolean;
  active?: boolean;
}

const SListItemButton = styled(ListItemButton)<ICustomListItemButton>(
  ({ theme, selected, open }) => ({
    paddingTop: 2,
    paddingBottom: 2,
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
      fontSize: 14,
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
