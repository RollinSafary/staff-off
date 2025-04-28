import { useState } from "react";
import { initialFormValues } from "../constants/formInitialValues";
import { IFormFields } from "../types/type";
import { AutocompleteChangeReason } from "@mui/material/Autocomplete";
import { IOption } from "../types/type";

const useFormState = () => {
  const [fields, setFields] = useState<IFormFields>(initialFormValues);

  const handleInputChange =
    (field: keyof IFormFields) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFields((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleAutocompleteChange =
    (field: keyof IFormFields) =>
    (
      _: React.SyntheticEvent,
      newValue: IOption | null,
      _reason: AutocompleteChangeReason
    ) => {
      setFields((prev) => ({
        ...prev,
        [field]: newValue?.label || "",
      }));
    };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({
      ...prev,
      agree: e.target.checked,
    }));
  };

  return {
    fields,
    handleInputChange,
    handleAutocompleteChange,
    handleCheckboxChange,
  };
};

export default useFormState;
