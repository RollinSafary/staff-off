import RegisterHeader from "./components/RegisterHeader";
import RegisterForm from "./components/RegisterForm";
import { StyledBox } from "./components/styled";

const Register = () => {
  return (
    <StyledBox>
      <RegisterHeader />
      <RegisterForm />
    </StyledBox>
  );
};

export default Register;
