import React from "react";
import { UserFormComponent } from "../../components/User/FormComponent";
import { useUser } from "../../hooks/useAuth";

const Login = () => {
  const { login, isLoading, isError } = useUser();

  const handleSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <UserFormComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
