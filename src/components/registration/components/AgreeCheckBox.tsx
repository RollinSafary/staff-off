import { Checkbox, FormControlLabel, Typography, Link } from "@mui/material";
import { IAgreeCheckboxProps } from "../types/type";

const AgreeCheckbox = ({ checked, onChange }: IAgreeCheckboxProps) => (
  <FormControlLabel
    control={<Checkbox checked={checked} onChange={onChange} />}
    label={
      <Typography variant="body2">
        I agree to the{" "}
        <Link href="#" underline="hover">
          Terms and conditions
        </Link>
        .
      </Typography>
    }
    sx={{ mt: 1 }}
  />
);

export default AgreeCheckbox;
