// 📁 components/form/RegisterForm.tsx
import EmailField from "./fields/EmailField";
import CompanyNameField from "./fields/CompanyNameField";
import HrNameField from "./fields/HrNameField";
import CountryField from "./fields/CountryField";
import TimezoneField from "./fields/TimezoneField";
import PasswordField from "./fields/PasswordField";
import ConfirmPasswordField from "./fields/ConfirmPasswordField";
import AgreeCheckbox from "./fields/AgreeCheckbox";
import SubmitButton from "./fields/SubmitButton";

const RegisterForm = () => {
  return (
    <form>
      <EmailField />
      <CompanyNameField />
      <HrNameField />
      <CountryField />
      <TimezoneField />
      <PasswordField />
      <ConfirmPasswordField />
      <AgreeCheckbox />
      <SubmitButton />
    </form>
  );
};

export default RegisterForm;
