import { useMemo } from "react";
import { IRegistrationFormData } from "../types/type";

const useFormValidation = ({
  email,
  companyName,
  firstName,
  lastName,
  country,
  utc,
  password,
  confirmPassword,
  agreement,
}: IRegistrationFormData): boolean => {
  return useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isCompanyFilled = !!companyName.trim();
    const isFirstNameFilled = !!firstName.trim();
    const isLastNameFilled = !!lastName.trim();
    const isCountrySelected = !!country;
    const isTimezoneSelected = !!utc;
    const isPasswordValid = passwordRegex.test(password);
    const doPasswordsMatch = password === confirmPassword;

    return (
      isEmailValid &&
      isCompanyFilled &&
      isFirstNameFilled &&
      isLastNameFilled &&
      isCountrySelected &&
      isTimezoneSelected &&
      isPasswordValid &&
      doPasswordsMatch &&
      agreement
    );
  }, [
    email,
    companyName,
    firstName,
    lastName,
    country,
    utc,
    password,
    confirmPassword,
    agreement,
  ]);
};

export default useFormValidation;
