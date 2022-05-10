import * as React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Theme, Toolbar, useMediaQuery } from "@mui/material";
import {
  AppBar,
  DrawerContent,
  DrawerDesktop,
  DrawerHeader,
} from "../components";
import { useSelector } from "../utils/useTypedSelector";
import Head from "next/head";

const Dashboard: React.FC<{ children: React.ReactChildren; title: string }> = ({
  children,
  title,
}) => {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.dashboard);
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("sm"));
  const [openDesktop, setOpenDesktop] = React.useState<boolean>(false);
  const [openMobile, setOpenMobile] = React.useState<boolean>(false);

  const toggleTheme = React.useMemo((): Theme => {
    return createTheme({
      palette: {
        mode: dark ? "dark" : "light",
        background: {
          default: dark ? "black" : "white",
        },
      },
    });
  }, [dark]);

  const handleOpenDrawer = (): void => {
    isDesktop ? setOpenDesktop(!openDesktop) : setOpenMobile(!openMobile);
  };
  // @ts-ignore
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={toggleTheme}>
        <Box sx={{ display: "flex", fontFamily: "Montserrat" }}>
          <CssBaseline />
          {/*  Navbar */}
          <AppBar
            opendesktop={openDesktop}
            handleDrawerOpen={handleOpenDrawer}
          />
          {/* Desktop Drawer */}
          <DrawerDesktop
            openDesktop={openDesktop}
            handleDrawerClose={() => setOpenDesktop(false)}
          >
            <DrawerContent open={openDesktop} />
          </DrawerDesktop>
          {/*  Mobile Drawer */}
          <MuiDrawer
            anchor={"left"}
            open={openMobile}
            variant={"temporary"}
            onClose={() => setOpenMobile(false)}
          >
            <Toolbar sx={{ marginTop: 1 }} />
            <DrawerContent open={openMobile} />
          </MuiDrawer>
          {/*  Content */}
          <Box
            component="main"
            className={"min-h-screen"}
            sx={{
              flexGrow: 1,
            }}
          >
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export default Dashboard;
