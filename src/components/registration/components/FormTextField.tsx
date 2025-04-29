import { TextField } from "@mui/material";
import { IFormTextFieldProps } from "../types/type";

const FormTextField = ({
  label,
  value,
  onChange,
  type = "text",
}: IFormTextFieldProps) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    fullWidth
    type={type}
  />
);

export default FormTextField;
