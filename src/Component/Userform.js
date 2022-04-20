import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { createContext } from "react";
//import UserTable from "./UserTable";
import {useNavigate} from "react-router"
export const userData=createContext()
const Userform = () => {
  const navigate=useNavigate()
  const { register, handleSubmit } = useForm();
  const [user,setuser]=useState([])
  const onSubmit = (data) => {
    navigate("/userTable")
     var res=user
     res.push(data)
    setuser(res)
    };
  return (
    <div>
    
      <h4>Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input type="submit" />
      </form>
      {/* <userData.Provider value={user}>
      <UserTable/>
      </userData.Provider> */}
    </div>
  );
};

export default Userform;
