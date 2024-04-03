import React from "react";
import { NavLink } from "react-router-dom";

const Navbarr = () => {
  return (
    <div className="nav">
      <nav>
        <div className="whole-navbar m-0 p-0 flex justify-evenly items-center  shadow-2xl-bottom">
          <div className="website-logo">
            
            <NavLink to="/" className="">
              <img width={120} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIX5-R5M47c6rQbB6Pqa2Yq75jsFD7KoynjRfMuotJfKPqqjRWOhV2hKrx71B_HEvpCVw&usqp=CAU" alt="222" />
            </NavLink>


          </div>
          <div className="ul">
            <ul className="flex justify-center items-center gap-4 text-lg font-semibold text-black ">

              <NavLink className={(e) => { return e.isActive ? "text-blue-800 rounded-sm p-1" : ""; }} to="/Home"><li>Home</li></NavLink>

              <NavLink
                className={(e) => {
                  return e.isActive ? "text-blue-800 rounded-sm p-1" : "";
                }}
                to="/About"
              >
                <li>About</li>
              </NavLink>

              <NavLink
                className={(e) => {
                  return e.isActive ? "text-blue-800 rounded-sm p-1" : "";
                }}
                to="/Github"
              >
                <li>User</li>
              </NavLink>

              <NavLink
                className={(e) => {
                  return e.isActive ? " text-blue-800 rounded-sm p-1" : "";

                }}
                to="/Login"
              >
                <li>Login</li>
              </NavLink>

            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/Login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </NavLink>

            <NavLink
              to="/Home"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </NavLink>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbarr;
