import React, { useState } from "react";

function Forms() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
 

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username)
    console.log(password)
   
  };
  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            onChange={(e)=> setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="passwrod"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default Forms;
