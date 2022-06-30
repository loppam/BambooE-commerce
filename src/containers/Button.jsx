import React from "react";

const Button = ({ children }) => {
  return (
    <button className="button">
      {children}
      <style jsx>{`
        .button {
          background: none;
          border: 0;
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default Button;
