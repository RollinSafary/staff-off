import { useTranslation } from "react-i18next";
import { countries, timezones } from "../data/mock";
import useFormState from "../hooks/useFormState";
import AgreeCheckbox from "./AgreeCheckBox";
import FormAutocomplete from "./FormAutocomplete";
import FormTextField from "./FormTextField";
import RegisterFooter from "./RegisterFooter";
import { Translations } from "@/constants/translations";

const RegisterForm = () => {
  const { t } = useTranslation();
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
        label={t(Translations.PAGE_REGISTER_FORM_EMAIL)}
        value={fields.email}
        onChange={handleInputChange("email")}
      />
      <FormTextField
        label={t(Translations.PAGE_REGISTER_FORM_COMPANY_NAME)}
        value={fields.companyName}
        onChange={handleInputChange("companyName")}
      />
      <FormTextField
        label={t(Translations.PAGE_REGISTER_FORM_HR_NAME)}
        value={fields.hrName}
        onChange={handleInputChange("hrName")}
      />
      <FormAutocomplete
        label={t(Translations.PAGE_REGISTER_FORM_COUNTRY)}
        options={countries}
        value={fields.country}
        onChange={handleAutocompleteChange("country")}
      />
      <FormAutocomplete
        label={t(Translations.PAGE_REGISTER_FORM_TIMEZONE)}
        options={timezones}
        value={fields.timezone}
        onChange={handleAutocompleteChange("timezone")}
      />
      <FormTextField
        label={t(Translations.PAGE_REGISTER_FORM_PASSWORD)}
        type="password"
        value={fields.password}
        onChange={handleInputChange("password")}
      />
      <FormTextField
        label={t(Translations.PAGE_REGISTER_FORM_CONFIRM_PASSWORD)}
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
