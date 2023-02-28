import React from "react";
import { UserFormComponent } from "../../components/User/FormComponent";
import { useUser } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  const { register, isLoading, isError } = useUser();
  const history = useHistory();
  const handleSubmit = async (data) => {
      await register(data);
      alert("Registration succesfful!");
      history.push("/posts");
  };

  return (
    <div className="grid-container">
      <div className="landing-page">
        <h1 className="landing-header">Register</h1>
      </div>
      <UserFormComponent onSubmit={handleSubmit} isRegistration={true} />
    </div>
  );
};

export default Register;
