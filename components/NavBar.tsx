import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around py-5">
        <h1 className="text-xl font-semibold">Todo App</h1>
        <ul className="flex gap-10 ">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
