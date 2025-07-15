import { Link } from "react-router-dom";
import logo from "../images/logo.JPG";

function NotFoundPage() {
  return (
    <div>
      <center>
        <div className="header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <h1>Page Not Found</h1>
          <h3>Sorry, we couldn't find the page you were looking for</h3>
        </div>

        <Link to="/">
          <button>Go back home</button>
        </Link>
      </center>
    </div>
  );
}

export default NotFoundPage;
