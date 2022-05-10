import React from "react";
import { BaseForm, FormItem } from "@mwadmin/components/BaseForm";
import { SubmitHandler } from "react-hook-form";
import { TInformasiPelanggan } from "@mwadmin/type/informasiPelangganType";
import MWTextInput from "@mwadmin/components/MWTextInput";
import { Button, Grid } from "@mui/material";

type TFormInformasiPelanggan = {
  initialValues: TInformasiPelanggan;
  onSubmit: SubmitHandler<TInformasiPelanggan>;
};

const FormInformasiPelanggan: React.FC<TFormInformasiPelanggan> = ({
  initialValues,
  onSubmit,
}) => {
  return (
    <BaseForm initialValues={initialValues} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item>
          <FormItem
            name={"nama_pelanggan"}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <MWTextInput
                {...field}
                label={"Nama Pelanggan"}
                fullWidth={true}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type={"submit"} variant={"contained"}>
            submit
          </Button>
        </Grid>
      </Grid>
    </BaseForm>
  );
};

export default FormInformasiPelanggan;
