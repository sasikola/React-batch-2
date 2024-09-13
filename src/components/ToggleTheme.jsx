import React, { useState } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState(false);

  const themeHandler = () => {
    setTheme(!theme);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <button
          onClick={themeHandler}
          className={` px-2 py-1 rounded-md mb-4 mt-3 ${
            theme
              ? "bg-black text-white"
              : "bg-white text-black border border-gray-900"
          }`}
        >
          {theme ? "White mode" : "Dark mode"}
        </button>
      </div>

      <div
        className={`h-[400px] w-[400px] border border-gray-800 ${
          theme
            ? "bg-black text-white"
            : "bg-white text-black border border-gray-900"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          consequatur laboriosam harum iure nihil repellendus inventore eius
          voluptates vero. Aliquam corporis qui fugit dignissimos aperiam unde
          impedit officia et officiis.
        </p>
      </div>
    </div>
  );
}

export default ToggleTheme;
