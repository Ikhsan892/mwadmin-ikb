import React from "react";

type TItemsRingkasanOrder = {
  label?: string | undefined | null;
  price?: number | undefined | null;
  qty?: number | undefined | null;
  unit?: "pcs" | "lusin" | "box";
  discount?: number | undefined | null;
};

type TAddOnsRingkasanOrder = {
  label?: string | undefined | null;
  price?: number | undefined | null;
};

type TRingkasanOrder = {
  items: TItemsRingkasanOrder[];
  addons: TAddOnsRingkasanOrder[];
  grandTotal?: number;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type { TRingkasanOrder, TAddOnsRingkasanOrder, TItemsRingkasanOrder };
