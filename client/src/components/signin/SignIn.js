import React,{useState} from "react";
import "./signin.css";
import { useForm } from "react-hook-form";
import axios from "axios"
import {BASE_URL}from "../../util/constants"
import { useHistory } from "react-router";


function SignIn() {

  const [isLoading,setLoading]=useState(false)
  let history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async(data, e) => {
    try{
      setLoading(true)
      const res = await axios.post(`${BASE_URL}/login`,data);
      if(res.data.status===true){
        localStorage.setItem("agro_auth",true)
        localStorage.setItem("agro_role",res.data.role)
        history.push("/admin/dashboard")
      }
      setLoading(false)


    }catch(err){
      console.log(err)
      setLoading(false)
      alert("Please enter valid Email or Password")
  
    }
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
                  {...register("email", {
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
                  {...register("password", {
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
              <input type="submit" className="outline" value={isLoading===true?"Loading":"Sign In"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
