import Layout from "@mwadmin/components/Layout";
import { ReactElement } from "react";
import MWBreadcrumbs from "@mwadmin/components/MWBreadcrumbs";
import { TLinks } from "@mwadmin/type/MWBreadcrumbsType";
import Page from "@mwadmin/components/Page";
import PageContent from "@mwadmin/components/PageContent";
import { Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import RingkasanOrder from "@mwadmin/components/RingkasanOrder";
import FormInformasiPelanggan from "@mwadmin/components/Forms/FormInformasiPelanggan";

const links: TLinks[] = [
  {
    name: "Servis Masuk",
    href: "/servis-masuk",
  },
];

function ServisMasuk() {
  const theme = useTheme();
  return (
    <Page title={"Servis Masuk"} padding={20}>
      <MWBreadcrumbs links={links} />
      <PageContent left={0} right={0} top={10} bottom={0}>
        <Typography className={"font-medium text-3xl font-montserrat"}>
          Servis Masuk
        </Typography>

        <Grid container className={"mt-3"} spacing={2}>
          <Grid item xs={12} md={9}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item md={3} xs={12}>
                    <span className={"font-medium"}>01</span>
                    <Typography className={"font-montserrat"}>
                      Informasi Pelanggan
                    </Typography>
                  </Grid>
                  <Grid item md={9} xs={12}>
                    <FormInformasiPelanggan
                      initialValues={{
                        nama_pelanggan: "",
                        alamat: "",
                        gender: "",
                        nomor_telepon: "",
                      }}
                      onSubmit={console.log}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: "none",
              [theme.breakpoints.up("md")]: {
                display: "block",
              },
            }}
          >
            <RingkasanOrder items={[]} addons={[]} loading={false} />
          </Grid>
        </Grid>
      </PageContent>
    </Page>
  );
}

ServisMasuk.getLayout = function getLayout(page: ReactElement) {
  // @ts-ignore
  return <Layout>{page}</Layout>;
};

export default ServisMasuk;
