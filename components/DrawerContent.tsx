import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MuiListItemIcon from "@mui/material/ListItemIcon";
import MuiListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Badge, OutlinedInput, Tooltip } from "@mui/material";
import { CustomListItemButton, DrawerSubHeading } from ".";
import { INavigationConfig, NavigationConfig } from "../navigationConfig";

type TDrawerContent = {
  open?: boolean;
};

const DrawerContentDiv = styled("div")(({ theme }) => ({
  padding: 10,
  overflowX: "hidden",
}));

const ListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({
  minWidth: 40,
}));

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    fontWeight: 500,
  },
}));

const CustomBadge = styled(Badge)(({ theme }) => ({
  top: 10,
  right: 7,
  position: "absolute",
}));

export const DrawerContent: React.FC<TDrawerContent> = ({ open }) => {
  const [config, setConfig] = useState<INavigationConfig[]>(NavigationConfig);
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    // const value = searchEngine<INavigationConfig>(
    //   "name",
    //   e.target.value,
    //   NavigationConfig
    // );
    // setConfig();
  };

  return (
    <DrawerContentDiv className={"font-montserrat"}>
      <OutlinedInput
        placeholder={"Search Navigation"}
        onChange={onChange}
        size={"small"}
        sx={{ display: open ? "block" : "none" }}
      />
      <Divider
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: open ? "block" : "none",
        }}
      />

      <List>
        {config.map((data) => {
          if (data.label) {
            return (
              <>
                <DrawerSubHeading fontWeight={"semi-bold"} open={open}>
                  {data.label}
                </DrawerSubHeading>
                {data.children?.map((content, index) => (
                  <ListItem key={index} disablePadding>
                    <Tooltip title={content.name} placement="top-end">
                      <CustomListItemButton open={open}>
                        <CustomBadge
                          color="primary"
                          badgeContent={0}
                          max={99}
                          sx={{ display: open ? "none" : "block", right: 7 }}
                        />
                        <ListItemIcon>{content.icon}</ListItemIcon>
                        <ListItemText primary={content.name} />
                        <Badge
                          color="primary"
                          badgeContent={0}
                          max={99}
                          sx={{ display: open ? "block" : "none" }}
                        />
                      </CustomListItemButton>
                    </Tooltip>
                  </ListItem>
                ))}
              </>
            );
          } else {
            return data.children?.map((content, index) => (
              <ListItem key={index} disablePadding>
                <Tooltip title={content.name} placement="top-end">
                  <CustomListItemButton open={open}>
                    <CustomBadge
                      color="primary"
                      badgeContent={1000}
                      max={99}
                      sx={{ display: open ? "none" : "block", right: 7 }}
                    />
                    <ListItemIcon>{content.icon}</ListItemIcon>
                    <ListItemText primary={content.name} />
                    <Badge
                      color="primary"
                      badgeContent={10}
                      max={99}
                      sx={{ display: open ? "block" : "none" }}
                    />
                  </CustomListItemButton>
                </Tooltip>
              </ListItem>
            ));
          }
        })}
      </List>
    </DrawerContentDiv>
  );
};
