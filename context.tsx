// import React, {
//   createContext,
//   PropsWithChildren,
//   SetStateAction,
//   useCallback,
//   useContext,
//   useMemo,
//   useState,
// } from "react";

// const emptyFunction = () => {};
// {
//   ("jamanakavor zaglushka vorpeszi xusapenq ts erroric");
// }

// interface IRegistrationFormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   country: string;
//   utc: string;
//   password: string;
//   confirmPassword: string;
//   agreement: boolean;
// }
// {
//   (" value types");
// }

// interface IRegistrationFormContext extends IRegistrationFormData {
//   setEmail: React.Dispatch<SetStateAction<string>>;
//   setFirstName: React.Dispatch<SetStateAction<string>>;
//   setLastName: React.Dispatch<SetStateAction<string>>;
//   setCountry: React.Dispatch<SetStateAction<string>>;
//   setUtc: React.Dispatch<SetStateAction<string>>;
//   setPassword: React.Dispatch<SetStateAction<string>>;
//   setConfirmPassword: React.Dispatch<SetStateAction<string>>;
//   setAgreement: React.Dispatch<SetStateAction<boolean>>;
// }
// {
//   (" value types and functions");
// }

// const defaultValues: IRegistrationFormContext = {
//   email: "",
//   firstName: "",
//   lastName: "",
//   country: "",
//   utc: "",
//   password: "",
//   confirmPassword: "",
//   agreement: false,
//   setEmail: emptyFunction,
//   setLastName: emptyFunction,
//   setFirstName: emptyFunction,
//   setConfirmPassword: emptyFunction,
//   setCountry: emptyFunction,
//   setUtc: emptyFunction,
//   setPassword: emptyFunction,
//   setAgreement: emptyFunction,
// };

// const MyContext = createContext<IRegistrationFormContext>(defaultValues);
// {
//   ("stexcum enq context");
// }

// // interface Props extends PropsWithChildren, IRegistrationFormData {}

// const MyContextProvider = ({ children }: PropsWithChildren) => {
//   const [email, setEmail] = useState<string>(defaultValues.email);
//   const [firstName, setFirstName] = useState<string>(defaultValues.firstName);
//   const [lastName, setLastName] = useState<string>(defaultValues.lastName);
//   const [country, setCountry] = useState<string>(defaultValues.country);
//   const [utc, setUtc] = useState<string>(defaultValues.utc);
//   const [password, setPassword] = useState<string>(defaultValues.password);
//   const [confirmPassword, setConfirmPassword] = useState<string>(
//     defaultValues.confirmPassword
//   );
//   const [agreement, setAgreement] = useState<boolean>(defaultValues.agreement);

//   return (
//     <MyContext.Provider
//       value={{
//         email,
//         setEmail,
//         firstName,
//         setFirstName,
//         lastName,
//         setLastName,
//         country,
//         setCountry,
//         utc,
//         setUtc,
//         password,
//         setPassword,
//         confirmPassword,
//         setConfirmPassword,
//         agreement,
//         setAgreement,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// };

// const EmailField = () => {
//   const { email, setEmail } = useContext(MyContext);
//   return (
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       placeholder="email"
//     />
//   );
// };

// const Form = () => {
//   const {
//     email,
//     firstName,
//     lastName,
//     country,
//     utc,
//     password,
//     confirmPassword,
//     agreement,
//   } = useContext(MyContext);
//   {
//     ("ogtagorcum enq contexty ");
//   }

//   const isFormFilled = useMemo(() => {
//     const isEmailCorrect = RegExp("").test(email);
//     const isFirstNameFilled = !!firstName.trim();
//     const isLastNameFilled = !!lastName.trim();

//     const isPasswordMatchingStandards = RegExp("").test(password);
//     const arePasswordsMatching = password === confirmPassword;

//     return (
//       isEmailCorrect &&
//       isFirstNameFilled &&
//       isLastNameFilled &&
//       isPasswordMatchingStandards &&
//       arePasswordsMatching &&
//       agreement
//     );
//   }, [
//     email,
//     firstName,
//     country,
//     utc,
//     lastName,
//     password,
//     confirmPassword,
//     agreement,
//   ]);

//   const onSubmit = useCallback(() => {
//     if (!isFormFilled) {
//       return;
//     }
//   }, [isFormFilled]);
//   {
//     ("nra hamar vor ete forman lracvac chi vochinch chveradarcni ");
//   }

//   return (
//     <div>
//       <EmailField />
//       <FirstNameField/>
//       <LastNameField />
//       <CountryField />
//       <UtcField />
//       <PasswordField />
//       <ConfirmPasswordField />
//       <AgrementCheckBox />
//       <SubmitButton onClick={onSubmit} disabled={!isFormFilled} />
//     </div>
//   );
// };

// const Page = () => {
//   return (
//     <MyContextProvider>
//       <Form /> {" children "}
//     </MyContextProvider>
//   );
// };
