import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Register/RegisterForm";
const Register = () => {

  const isSubmitted = (userInfo) => {
    console.log(userInfo)
  }

  return (
    <div>
      <Navbar btnName="Login" path="/" />
      <RegisterForm isSubmit={isSubmitted} />
    </div>
  );
};

export default Register;
