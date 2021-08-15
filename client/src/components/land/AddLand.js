import React from "react";
import { useForm } from "react-hook-form";
import "./addland.css";

const AddLand = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  console.log(errors);
  return (
    <>
      <div className="addLand-title">
        <p>Add Land</p>
      </div>
      <div className="hr"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="add-land">
        <div className="lands-details">
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("name", {
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
            <label>Quantity</label>
            <input
              type="text"
              placeholder="Enter Quantity"
              {...register("quantity", { required: true })}
              className="outline"
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              placeholder="Enter a Amount"
              {...register("amount", { required: true })}
              className="outline"
              required
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="datetime"
              placeholder="dd/mm/yy"
              {...register("start", { required: true })}
              className="outline"
              required
            />
          </div>
          <div>
            <label>Due Date</label>
            <input
              type="datetime"
              placeholder="dd/mm/yy"
              {...register("due", { required: true })}
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
export default AddLand;
