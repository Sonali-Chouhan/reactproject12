import React, { useState } from 'react';
import moment from 'moment';

const Profile = () => {
  const [start,setstart]=useState()
  const [end,setend]=useState()
const handleSave=(event)=>{
event.preventDefault()
console.log("start",start)
console.log("end",end)
const date=moment().toDate();
const day=moment().day()
console.log("data",date)
console.log("day",day)


}
return (
  <div>
      
      {/* <h1>Book your Filght</h1>
    <DatePicker onChange={ (item) =>setitem(item)} value={item}
   
    selectStart
    minDate={item}
    startDate={item}
    endDate={ccc}
    selected={item}
   
    />
   
   <div>
    <p> <FontAwesomeIcon icon={faArrowDown} /> </p>  <p> <FontAwesomeIcon icon={faArrowUp} /> </p>
    </div>
    <DatePicker onChange={  (ccc) =>   setccc(ccc)} value={ccc}
   
    selectStart
    minDate={ccc}
    startDate={ccc}
    endDate={ccc}
    selected={ccc}
   
   
   
    />
     */}

   
       from:<input type="date"  onChange={(e)=>setstart(e.target.value)} /><br/>
       to:<input type='date'  onChange={(e)=>setend(e.target.value)} /><br/>
       <button type="submit" onClick={(event)=>handleSave(event)} >save</button>
       
    
   
  </div>
)
}

export default Profile