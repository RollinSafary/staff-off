import { useCallback, useContext } from "react";
import { MyContext } from "../context/FormContext";
import FormFieldsGroup from "./FormFieldsGroup";
import RegisterFooter from "./RegisterFooter";
import useFormValidation from "./UseFormValidation";

const RegisterForm = () => {
  const context = useContext(MyContext);
  const isFormValid = useFormValidation(context);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isFormValid) return;
      console.log("Submit!");
    },
    [isFormValid]
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormFieldsGroup />
      <RegisterFooter disabled={!isFormValid} />
    </form>
  );
};

export default RegisterForm;
