import React, { useEffect, useState } from "react";
//import {userData }from "./Userform"
import DatePicker from "react-date-picker";
import moment from "moment";

const UserTable = () => {
  const [start, setstart] = useState(new Date());
  const [end, setend] = useState();
  const [value,setvlue]=useState();
//  var diff=start.diff(end,"day")
//  console.log("days",diff)
//  console.log( moment(diff).format('E') );
// const time=Math(start.getDay()-end.getDay())
// console.log("gg",time)
useEffect(()=>{
  var a=moment(start)
var b=moment(end)
var c=value
c=b.diff(a,"day")
setvlue(c)

},[start,end])
  return (
    <div>
      <h4>different Days::{value}</h4>
      <h1>User-Table</h1>
      <DatePicker
        onChange={(start) => setstart(start)}
        value={start}
        selectsStart
        minDate={start}
        startDate={start}
        endDate={end}
        selected={start}
        

        
      />
      <br />
      <DatePicker
        
        onChange={(end) => setend(end)}
        value={end}
        // name="date"
        selectsStart
        minDate={start}
        startDate={start}
        selected={end}
      />
      <br />
      From: <input value={start} />
      <br></br>
      To:
      <input value={end} /> <br></br>
    </div>
  );
};

export default UserTable;
