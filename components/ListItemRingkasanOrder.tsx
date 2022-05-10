import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

type TListItemRingkasanOrder = {
  label?: string | undefined | null;
  price?: number | undefined | null;
  qty?: number | undefined | null;
  unit?: "pcs" | "lusin" | "box";
  discount?: number | undefined | null;
  useDiscount?: boolean | undefined | null;
};

const ListItemRingkasanOrder: React.FC<TListItemRingkasanOrder> = ({
  label,
  price,
  qty,
  unit = "pcs",
  discount,
  useDiscount = false,
}) => {
  if (useDiscount) {
    return (
      <React.Fragment>
        <ListItemText
          disableTypography={true}
          primary={
            <Typography className={"text-sm font-montserrat font-semibold"}>
              {label}
            </Typography>
          }
          secondary={
            <div className={"flex items-start justify-between"}>
              <Typography className={"font-montserrat font-medium text-sm"}>
                {qty ?? "-"}{" "}
                <span>
                  <small>({unit})</small>
                </span>
              </Typography>
              <div>
                <Typography className={"text-md font-montserrat font-semibold"}>
                  {price ?? "Rp 0,-"}
                </Typography>
                <s className={"text-xs"}>{discount ?? ""}</s>
              </div>
            </div>
          }
        />
        <Divider />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <ListItem>
          <ListItemText
            disableTypography={true}
            primary={
              <div className={"flex items-center justify-between"}>
                <Typography className={"text-sm font-montserrat font-medium"}>
                  {label ?? ""}
                </Typography>
                <Typography
                  className={"text-md font-montserrat font-semibold flex-none"}
                >
                  {price ?? "Rp 0,-"}
                </Typography>
              </div>
            }
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
};

export default ListItemRingkasanOrder;
