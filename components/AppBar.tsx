import React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";

const drawerWidth = 250;

interface IAppbarProps extends MuiAppBarProps {
  openDesktop: boolean;
  handleDrawerOpen?: () => void;
}

const CRMAppbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAppbarProps>(({ theme, openDesktop }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openDesktop && {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
}));

export const AppBar: React.FC<IAppbarProps> = ({
  openDesktop,
  handleDrawerOpen,
}) => {
  const theme = useTheme();
  return (
    <CRMAppbar
      position="fixed"
      openDesktop={openDesktop}
      className={"font-montserrat"}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
            color: theme.palette.text.primary,
            [theme.breakpoints.up("sm")]: {
              ...(openDesktop && { display: "none" }),
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="default"
          >
            <Brightness4Icon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="default"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="default"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="default"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </CRMAppbar>
  );
};
