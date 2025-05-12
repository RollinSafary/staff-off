import { PropsWithChildren, useState } from "react";
import { defaultValues } from "../data/DefaultValues";
import { IRegistrationFormContext } from "../types/type";
import { createContext } from "react";

export const MyContext = createContext<IRegistrationFormContext>(defaultValues);

export const MyContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string>(defaultValues.email);
  const [companyName, setCompanyName] = useState<string>(
    defaultValues.companyName
  );
  const [firstName, setFirstName] = useState<string>(defaultValues.firstName);
  const [lastName, setLastName] = useState<string>(defaultValues.lastName);
  const [country, setCountry] = useState<string>(defaultValues.country);
  const [utc, setUtc] = useState<string>(defaultValues.utc);
  const [password, setPassword] = useState<string>(defaultValues.password);
  const [confirmPassword, setConfirmPassword] = useState<string>(
    defaultValues.confirmPassword
  );
  const [agreement, setAgreement] = useState<boolean>(defaultValues.agreement);

  return (
    <MyContext.Provider
      value={{
        email,
        setEmail,
        companyName,
        setCompanyName,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        country,
        setCountry,
        utc,
        setUtc,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        agreement,
        setAgreement,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
