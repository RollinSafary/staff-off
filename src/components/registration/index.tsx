import RegisterHeader from "./components/RegisterHeader";
import RegisterForm from "./components/RegisterForm";
import { StyledBox } from "./components/styled";
import { MyContextProvider } from "./context/FormContext";

const Register = () => {
  return (
    <StyledBox>
      <RegisterHeader />
      <MyContextProvider>
        <RegisterForm />
      </MyContextProvider>
    </StyledBox>
  );
};

export default Register;
