import React from "react";
import {
  Button,
  Card,
  CardContent,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemRingkasanOrder from "@mwadmin/components/ListItemRingkasanOrder";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TRingkasanOrder } from "@mwadmin/type/ringkasanOrderItemType";

const RingkasanOrder: React.FC<TRingkasanOrder> = ({
  items = [],
  addons = [],
  grandTotal = 0,
  loading = false,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography className={"font-montserrat font-medium text-lg"}>
          Ringkasan Orderan
        </Typography>
        <Typography className={"font-montserrat mt-2"}>Item</Typography>
        <Divider />

        {/* List Item */}
        <List dense={true}>
          {items && items.length > 0 ? (
            items.map((data) => (
              <ListItemRingkasanOrder
                label={data.label}
                price={data.price}
                unit={data.unit}
                useDiscount={true}
                discount={data.discount}
              />
            ))
          ) : (
            <ListItem>
              <div className={"w-full"}>
                <Typography
                  className={"font-montserrat text-md font-thin text-center"}
                >
                  -- Kosong --
                </Typography>
              </div>
            </ListItem>
          )}
        </List>

        <Typography className={"font-montserrat mt-2"}>
          Biaya Lain Lain
        </Typography>
        <Divider />

        {/*  List Biaya Lain Lain   */}
        <List dense={true}>
          {addons && addons.length > 0 ? (
            addons.map((data) => (
              <ListItemRingkasanOrder
                label={data.label}
                price={data.price}
                useDiscount={false}
              />
            ))
          ) : (
            <ListItem>
              <div className={"w-full"}>
                <Typography
                  className={"font-montserrat text-md font-thin text-center"}
                >
                  -- Kosong --
                </Typography>
              </div>
            </ListItem>
          )}
        </List>

        <div>
          <Typography className={"font-montserrat text-md font-medium"}>
            Grand Total
          </Typography>
          <Typography className={"font-montserrat text-xl font-bold"}>
            {grandTotal}
          </Typography>
        </div>

        <Button
          variant={"contained"}
          className={"mt-3"}
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
          fullWidth={true}
          disabled={loading}
          endIcon={<Send />}
          onClick={onClick}
        >
          {loading ? "Loading" : "Submit"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RingkasanOrder;
