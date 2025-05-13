import { IRegistrationFormContext } from "../types/type";
const emptyFunction = () => {};
export const defaultValues: IRegistrationFormContext = {
  email: "",
  companyName: "",
  firstName: "",
  lastName: "",
  country: "",
  utc: "",
  password: "",
  confirmPassword: "",
  agreement: false,
  setEmail: emptyFunction,
  setCompanyName: emptyFunction,
  setLastName: emptyFunction,
  setFirstName: emptyFunction,
  setConfirmPassword: emptyFunction,
  setCountry: emptyFunction,
  setUtc: emptyFunction,
  setPassword: emptyFunction,
  setAgreement: emptyFunction,
};
