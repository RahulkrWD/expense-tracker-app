import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-bg-dark nav">
      <div>
        <h4>
          <Link className="text-decoration-none text-light p-3" to={"/"}>
            Expense Tracker App
          </Link>
        </h4>
      </div>
      <div>
        <ul type="none" className="list-items">
          <li>
            <Link className="text-decoration-none text-light p-3" to={"/add"}>
              {" "}
              <i className="fa-solid fa-address-book"></i> Add
            </Link>
          </li>

          <li>
            <Link className="text-decoration-none text-light p-3" to={"/stats"}>
              Statistics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
