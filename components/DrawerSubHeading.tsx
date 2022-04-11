import React from "react";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface IDrawerContent extends TypographyProps {
  open?: boolean;
}

const SDrawerSubHeading = styled(Typography)<IDrawerContent>(
  ({ theme, open }) => ({
    ...(open && {
      color: theme.palette.text.secondary,
      display: "block",
      marginTop: 20,
      fontSize: 14,
      textTransform: "uppercase",
      marginBottom: 20,
      fontWeight: 600,
    }),
    ...(!open && {
      display: "none",
      marginTop: 0,
      marginBottom: 0,
    }),
  })
);

export const DrawerSubHeading: React.FC<IDrawerContent> = ({
  open,
  children,
}) => {
  return <SDrawerSubHeading open={open}>{children}</SDrawerSubHeading>;
};
