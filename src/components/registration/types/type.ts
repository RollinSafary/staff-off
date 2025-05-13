import { SetStateAction } from "react";

export interface IRegistrationFormData {
  email: string;
  companyName: string;
  firstName: string;
  lastName: string;
  country: string;
  utc: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

export interface IRegistrationFormContext extends IRegistrationFormData {
  setEmail: React.Dispatch<SetStateAction<string>>;
  setCompanyName: React.Dispatch<SetStateAction<string>>;
  setFirstName: React.Dispatch<SetStateAction<string>>;
  setLastName: React.Dispatch<SetStateAction<string>>;
  setCountry: React.Dispatch<SetStateAction<string>>;
  setUtc: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<SetStateAction<string>>;
  setAgreement: React.Dispatch<SetStateAction<boolean>>;
}
export interface IOption {
  label: string;
}

export interface IFormAutocompleteProps {
  label: string;
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
}
