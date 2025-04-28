import { countries, timezones } from "../data/mock";
import useFormState from "../hooks/useFormState";
import AgreeCheckbox from "./AgreeCheckBox";
import FormAutocomplete from "./FormAutocomplete";
import FormTextField from "./FormTextField";
import RegisterFooter from "./RegisterFooter";

const RegisterForm = () => {
  const {
    fields,
    handleInputChange,
    handleAutocompleteChange,
    handleCheckboxChange,
  } = useFormState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(fields).some(
        (field) => field === "" || field === null || field === false
      )
    ) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormTextField
        label="Email"
        value={fields.email}
        onChange={handleInputChange("email")}
      />
      <FormTextField
        label="Company name"
        value={fields.companyName}
        onChange={handleInputChange("companyName")}
      />
      <FormTextField
        label="HR name"
        value={fields.hrName}
        onChange={handleInputChange("hrName")}
      />
      <FormAutocomplete
        label="Country"
        options={countries}
        value={fields.country}
        onChange={handleAutocompleteChange("country")}
      />
      <FormAutocomplete
        label="Timezone"
        options={timezones}
        value={fields.timezone}
        onChange={handleAutocompleteChange("timezone")}
      />
      <FormTextField
        label="Password"
        type="password"
        value={fields.password}
        onChange={handleInputChange("password")}
      />
      <FormTextField
        label="Confirm password"
        type="password"
        value={fields.confirmPassword}
        onChange={handleInputChange("confirmPassword")}
      />
      <AgreeCheckbox checked={fields.agree} onChange={handleCheckboxChange} />
      <RegisterFooter />
    </form>
  );
};

export default RegisterForm;
