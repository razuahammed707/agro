import React from "react";
import "./signin.css";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  console.log(errors);
  return (
    <div className="sigin-frame">
      <div className="signin-menu">
        <div className="signin-title">
          <p>Sign In Access</p>
        </div>
        <div className="signin-description">
          <p>You must become a member to login and access the entire site.</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="add-signin">
            <div className="signin-details">
              <div>
                <label>Email</label>
                <input
                  type="text"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Enter Email"
                  className="outline"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="Text"
                  {...register("Password", {
                    required: true,
                    maxLength: 16,
                    minLength: 6,
                  })}
                  placeholder="Enter Password"
                  className="outline"
                  required
                />
              </div>
            </div>

            <div className="addsignin-submit">
              <input type="submit" className="outline" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
