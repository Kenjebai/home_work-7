import React from "react";
import { useState } from "react";

export default function Form1(){
  const [firstName, setFirstName] = useState("");
  const [tel, setTel] = useState();
  const [email, setEmail] = useState()
  const ageAsNumber = Number(tel);

  return(
    <div style={{backgroundColor:"#888", display:"flex", height:"90vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
      <label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="ФИО" style={{width:"500px", height:"40px"}}/>
      </label>
      <label>
        <input value={tel} onChange={(e) => setTel(e.target.value)} type="tel" placeholder="тел:" style={{width:"500px", height:"40px"}}/>
      </label>
      <label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" style={{width:"500px", height:"40px"}}/>
      </label>
      {firstName !== "" && <p>Your name is {firstName}</p>}
      {ageAsNumber > 0 && <p>Your tel is {ageAsNumber}</p>}
      {email && <p>Your email is {email}</p>}

      </div>
    </div>
  )
}