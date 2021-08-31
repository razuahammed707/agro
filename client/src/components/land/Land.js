import React, { useState,useEffect } from "react";
import "./land.css";
import Modal from "../global/Modal";
import AddLand from "./AddLand";
import {BASE_URL}from "../../util/constants"
import axios from "axios";
import {AiFillDelete} from "react-icons/ai"
import moment from "moment"


function Land() {

  const [lands, setLands] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading,setLoading]=useState(true)

  const role=localStorage.getItem("agro_role")


  const loadData=async()=>{
    try{

      setLoading(true)
      const users = await axios.get(`${BASE_URL}/lands`);
      setLands(users.data.data)
      setLoading(false)


    }catch(err){
      console.log(err)
      // alert("Something went wrong")
    }
  }

  const handleDelete=async(id)=>{
    const users = await axios.delete(`${BASE_URL}/lands/${id}`);
    loadData();
  }

  useEffect(()=>{
    loadData()
  },[])

  const [isopen, setIsopen] = useState(false);


  if(isLoading){
    return(<>Loading</>)
  }else



      


  return (
    <div>
      <div>
        <div className="land-header">
          <p>Lands</p>
        </div>
        <div>
          <div className="land-add">
            <button
              onClick={() => {
                setIsopen(true);
              }}
            >
              Add Land
            </button>
          </div>

          <div>
            <Modal trigger={isopen} setTrigger={setIsopen}>
              <AddLand trigger={isopen} setTrigger={setIsopen} loadData={loadData} />
            </Modal>
          </div>
        </div>
        <div className="land-title">
          <p>Name</p>
          <p>Quantity</p>
          <p>Amount</p>
          <p>Start date</p>
          <p>Due Date</p>
          <p>Action</p>
        </div>
        {lands.map((item,key)=>{
          return (
            <div key={key}>
              <div className="landDetails">
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.amount}</p>
                <p>{moment(item.startTime).format("DD-MM-YYYY")}</p>
                <p>{moment(item.endDate).format("DD-MM-YYYY")}</p>
                {role==="admin"?<p><AiFillDelete onClick={()=>{
              handleDelete(item._id)
            }}/></p>:"Delete not allowed"}


  
              </div>
            </div>
          );
        })}
        
       
      </div>
    </div>
  );
}

export default Land;
