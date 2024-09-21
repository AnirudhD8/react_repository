// LoginForm.js
import React from "react";
import { useForm } from "react-hook-form";
import "./Login.styles.css"

function Login() {
  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // You can handle the form data here (e.g., send it to a server)
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {/* onSubmit will call handleSubmit provided by react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Input */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {/* Show error message if username is invalid */}
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {/* Show error message if password is invalid */}
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
