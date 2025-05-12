import EmailField from "./fields/EmailField";
import CompanyNameField from "./fields/CompanyNameField";
import HrNameField from "./fields/HrNameField";
import CountryField from "./fields/CountryField";
import TimezoneField from "./fields/TimezoneField";
import PasswordField from "./fields/PasswordField";
import ConfirmPasswordField from "./fields/ConfirmPasswordField";
import AgreeCheckbox from "./AgreeCheckBox";

const FormFieldsGroup = () => {
  return (
    <>
      <EmailField />
      <CompanyNameField />
      <HrNameField />
      <CountryField />
      <TimezoneField />
      <PasswordField />
      <ConfirmPasswordField />
      <AgreeCheckbox />
    </>
  );
};

export default FormFieldsGroup;
