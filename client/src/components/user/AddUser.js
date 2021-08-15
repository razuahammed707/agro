import React from "react";
import { useForm } from "react-hook-form";
import "./AddUser.css";

const AddUser = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  console.log(errors);
  return (
    <>
      <div className="addUser-title">
        <p>Add User</p>
      </div>
      <div className="hr"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="add-user">
        <div className="users-details">
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("Name", {
                required: true,
                maxLength: 80,
              })}
              placeholder="Enter a Name"
              className="outline"
              required
            />

            {/* <div className="errors">
            {errors.TransactionName && errors.TransactionName.message}
          </div> */}
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Enter a Email"
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
              placeholder="Enter a Password"
              className="outline"
              required
            />
          </div>
        </div>
        <div className="adduser-submition">
          <div className="adduser-reset">
            <input
              type="reset"
              value="Cancel"
              className="outline"
              onClick={() => props.setTrigger(false)}
            />
          </div>
          <div className="adduser-submit">
            <input type="submit" className="outline" value="Add" />
          </div>
        </div>
      </form>
    </>
  );
};
export default AddUser;
