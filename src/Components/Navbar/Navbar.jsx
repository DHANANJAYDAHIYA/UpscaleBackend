import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="left">
     <img src="https://www.linkpicture.com/q/final-logo.png" type="image" width="300" height="50"/>
     </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Mentors <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/quest">Problem Set</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
