import DashboardIcon from "@mui/icons-material/Dashboard";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ViewListIcon from "@mui/icons-material/ViewList";

export interface INavigationConfigChildren {
  route: string;
  name: string;
  icon?: any;
}

export interface INavigationConfig {
  label?: string | null;
  children?: INavigationConfigChildren[];
}

export const NavigationConfig: INavigationConfig[] = [
  {
    label: null,
    children: [
      {
        route: "/",
        name: "Overview",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Penjualan",
    children: [
      {
        route: "/servis-masuk",
        name: "Servis Masuk",
        icon: <DashboardIcon />,
      },
      {
        route: "/jual-acc-sparepart",
        name: "Jual Acc & Sparepart",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Pembelian & Pengeluaran",
    children: [
      {
        route: "/bukti-pembelian",
        name: "Bukti Pembelian",
        icon: <DashboardIcon />,
      },
      {
        route: "/expenses",
        name: "Expenses",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Inventory",
    children: [
      {
        route: "/barang-servisan",
        name: "Barang Servisan",
        icon: <DashboardIcon />,
      },
      {
        route: "/acc-sparepart",
        name: "Accessories & Sparepart",
        icon: <DashboardIcon />,
      },
      {
        route: "/inventaris",
        name: "Inventaris",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Report",
    children: [
      {
        route: "/daftar-invoice",
        name: "Daftar Invoice",
        icon: <DashboardIcon />,
      },
      {
        route: "/generate-invoice",
        name: "Generate Invoice",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Manajemen",
    children: [
      {
        route: "/pelanggan",
        name: "Pelanggan",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    label: "Form",
    children: [
      {
        route: "/form/editor",
        name: "Form Editor",
        icon: <DragIndicatorIcon />,
      },
      {
        route: "/form",
        name: "List Form",
        icon: <ViewListIcon />,
      },
    ],
  },
];
