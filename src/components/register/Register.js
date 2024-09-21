import React from "react";
import { useForm } from "react-hook-form";
import './Register.styles.css'; // Import the CSS file for styling

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form data submission (e.g., send to server)
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid username",
                },
              })}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          {/* Email ID Field */}
          <div>
            <label htmlFor="email">Email ID</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                  message: "Password must be at least 8 characters long and contain at least one letter and one number",
                },
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {/* Instagram Username Field */}
          <div>
            <label htmlFor="instagram">Instagram Username</label>
            <input
              id="instagram"
              type="text"
              {...register("instagram", {
                required: "Instagram username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid Instagram username",
                },
              })}
            />
            {errors.instagram && (
              <p className="error">{errors.instagram.message}</p>
            )}
          </div>

          {/* College Name Field */}
          <div>
            <label htmlFor="college">College Name</label>
            <input
              id="college"
              type="text"
              {...register("college", { required: "College name is required" })}
            />
            {errors.college && <p className="error">{errors.college.message}</p>}
          </div>

          {/* Sport Name Field */}
          <div>
            <label htmlFor="sport">Sport Name</label>
            <input
              id="sport"
              type="text"
              {...register("sport", { required: "Sport name is required" })}
            />
            {errors.sport && <p className="error">{errors.sport.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;