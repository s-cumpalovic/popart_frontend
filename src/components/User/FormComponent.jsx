import { useForm } from "react-hook-form";

export const UserFormComponent = ({
  onSubmit,
  isRegistration = false,
}) => {
  const { register, handleSubmit } = useForm();

  const submitCallback = (data) => {
    onSubmit({ name: data.name, email: data.email, password: data.password });
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit(submitCallback)}>
        <label>Email</label>
        <input {...register("email")} type="email" required />

        <label>Password</label>
        <input {...register("password")} type="password" required />
        {isRegistration ? (
          <>
            <label>Name</label>
            <input {...register("name")} type="text" required />
          </>
        ) : null}

        <button type="submit">{isRegistration ? "Register" : "Log in"}</button>
      </form>
    </div>
  );
};
