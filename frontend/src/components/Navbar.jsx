import React from "react";

const Navbar = ({isDatapage }) => {
  return (
    <div className="w-full bg-red-100 h-16">
      <nav>
        <ul>
          {isDatapage && (
            <div>
              <p> Registration Data </p>
              <button>Back </button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
