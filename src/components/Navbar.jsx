import { IoMdLogIn } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div className="flex bg-blue-400 justify-between items-center pl-[10px] pr-[10px] h-[50px] shadow-lg ">
        <div className="left-side">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        <div className="middle-part">
          <ul className="flex gap-3 ">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-side">
          <IoMdLogIn size={30} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
