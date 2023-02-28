import React from "react";
import { UserFormComponent } from "../../components/User/FormComponent";
import { useUser } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const { login, isLoading, isError } = useUser();
  const history = useHistory();
  const handleSubmit = async (data) => {
      await login(data);
      alert("Login succesfful!");
      history.push("/posts");
  };

  return (
    <div className="grid-container">
      <div className="landing-page">
        <h1 className="landing-header">Login</h1>
      </div>
      <UserFormComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
