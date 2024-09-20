import axios from "axios";
import React, { useState } from "react";

function DisplayUsers() {
  const [users, setUsers] = useState([]);
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });

  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    setUsers(res.data);
  });

  return (
    <>
      <div>
        {users.map((i) => {
          return (
            <>
              <p>{i.name} </p>
              <p>{i.email} </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default DisplayUsers;

// using fetch method we have to fetch the data from get api
// https://jsonplaceholder.typicode.com/users
