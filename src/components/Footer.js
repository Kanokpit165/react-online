import React from "react";

const Footer = () => {
  const Name = "Kanokpit Rattanasiripirom"
  return (
    <>
      <footer className="container">
        <p>© {Name} 1999-{new Date().getFullYear()}</p>
      </footer>
    </>
  );
};
export default Footer;