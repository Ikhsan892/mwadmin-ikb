import React from "react";
import MuiOutlinedInput, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const TextField = styled(MuiOutlinedInput)<TextFieldProps>(({ theme }) => ({
  borderColor: theme.palette.primary.light,
  "& .MuiOutlinedInput-root": {
    borderRadius: 15,
  },
}));

const MwTextInput: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default MwTextInput;
