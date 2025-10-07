import React from "react";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    const { email, password } = data;

    if (email === "xyz@revcloud.com" && password === "123") {
      localStorage.setItem("isAuthenticated", "true");
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2>Login</h2>

      <div style={{ marginBottom: 15 }}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>

      <div style={{ marginBottom: 15 }}>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        style={{ padding: "10px 15px", fontSize: 16, cursor: "pointer" }}
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
