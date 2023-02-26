import React from "react";
import { UserFormComponent } from "../../components/User/FormComponent";
import { useUser } from "../../hooks/useAuth";

const Register = () => {
  const { register, isLoading, isError } = useUser();

  const handleSubmit = async (data) => {
    try {
      await register(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <UserFormComponent onSubmit={handleSubmit} isRegistration={true} />
    </div>
  );
};

export default Register;
