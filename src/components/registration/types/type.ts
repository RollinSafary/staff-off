import { AutocompleteChangeReason } from "@mui/material";
import { SyntheticEvent } from "react";

export interface IFormTextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
export interface IOption {
  label: string;
}

export interface IFormAutocompleteProps {
  label: string;
  options: IOption[];
  value: IOption | null;
  onChange: (
    event: SyntheticEvent,
    newValue: IOption | null,
    reason: AutocompleteChangeReason
  ) => void;
}
export interface IAgreeCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IOption {
  label: string;
}

export interface IFormFields {
  email: string;
  companyName: string;
  hrName: string;
  password: string;
  confirmPassword: string;
  country: IOption | null;
  timezone: IOption | null;
  agree: boolean;
}
