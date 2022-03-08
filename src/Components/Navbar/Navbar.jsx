import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>
          Upscale<span>Talks</span>
        </h1>
      </div>
      <div className="right">
        <h5>Login</h5>
      </div>
    </div>
  );
};

export default Navbar;
