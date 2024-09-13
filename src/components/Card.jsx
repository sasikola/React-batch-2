import React from "react";

function Card(props) {
  return (
    <>
      <div className="h-auto w-[240px] bg-slate-300 p-2 rounded-lg shadow-md ">
        <div className="flex justify-center mb-2">
          <h1 className="text-xl font-bold">{props.title} </h1>
        </div>
        <div>
          <img
            className="rounded-md w-[224px] h-[126px]"
            src={props.img}
            alt=""
          />
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
