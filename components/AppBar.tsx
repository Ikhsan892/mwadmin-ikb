import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { darkMode } from "../action";
import { useSelector } from "../utils/useTypedSelector";

const drawerWidth = 250;

interface IAppbarProps extends MuiAppBarProps {
  opendesktop: boolean;
  handleDrawerOpen?: () => void;
}

const MWAppbar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAppbarProps>(({ theme, opendesktop }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(opendesktop && {
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
  opendesktop,
  handleDrawerOpen,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.dashboard);

  const handleClickDark:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = useCallback(
    (e) => {
      dispatch(darkMode(!dark));
    },
    [dark]
  );

  return (
    <MWAppbar
      position="fixed"
      opendesktop={opendesktop}
      className={"font-montserrat"}
    >
      <Toolbar color={"default"}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
            color: theme.palette.text.primary,
            [theme.breakpoints.up("sm")]: {
              ...(opendesktop && { display: "none" }),
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            onClick={handleClickDark}
            size="large"
            aria-label="show 4 new mails"
            color="default"
          >
            {dark ? <NightlightIcon /> : <Brightness4Icon />}
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
    </MWAppbar>
  );
};
