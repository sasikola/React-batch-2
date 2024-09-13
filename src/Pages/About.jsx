import React from "react";

function About(x) {
  return (
    <div>
      <h1>This is a about page</h1>

      <p>
        My name is {x.firstName} {x.lastName} and my age is {x.age}
      </p>
    </div>
  );
}

export default About;
