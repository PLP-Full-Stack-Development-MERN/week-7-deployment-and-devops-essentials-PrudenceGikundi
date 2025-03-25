import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-teal-700 text-white text-center p-4 mt-8"
      style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MERN Blog. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;