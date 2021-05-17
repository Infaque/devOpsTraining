// import { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const [isVerfied, setisVerfied] = useState(false);

  if (user.authLoaded && user.authenticated === true) {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/SignIn">
          <button
            className="btn btn-primary text-white float-right ml-3"
            data="sign-in"
          >
            Sign Out
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary text-white float-right ml-3">
            home
          </button>
        </Link>
        <Link to="/AddNotes">
          <button
            className="btn btn-primary text-white float-right"
            data="Add-notes"
          >
            Add Notes
          </button>
        </Link>

        <h1 className="btn btn-primary text-white float-right" data="Add-notes">
          {" "}
          {user.displayName}
        </h1>
      </div>
    );
  } else if (user.authLoaded && !user.authenticated === true)
    return (
      <div className="ui secondary pointing menu">
        <Link to="/SignIn">
          <button
            className="btn btn-primary text-white float-right ml-3"
            data="sign-in"
          >
            Sign In
          </button>
        </Link>
        <Link to="/Home">
          <button className="btn btn-primary text-white float-right ml-3">
            home
          </button>
        </Link>
      </div>
    );
  else {
    return "...loading";
  }
};
export default Header;
