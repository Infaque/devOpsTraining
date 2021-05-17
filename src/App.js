import { useEffect } from "react";

import HomePage from "./component/HomePage";
import Home from "./component/Home";
import history from "./history/history";
import Header from "./header/Header";
import firebase from "./firebaseconfig/firebase";
import AllNotes from "./notescomponents/AllNotes";
import LoginHeader from "./header/LoginHeader";

import { setCurrentUser } from "./redux/auth/auth.action";

import { useDispatch, useSelector } from "react-redux";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

function App(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          setCurrentUser({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            verified: userAuth.emailVerified,
            authLoaded: true,
            authenticated: true,
          })
        );
      } else {
        dispatch(
          setCurrentUser({
            email: "",
            displayName: "",
            verified: false,
            authLoaded: true,
            authenticated: false,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router history={history}>
        <Header name={user} />
        <div>
          <Switch>
            {user.authLoaded ? (
              <>
                {" "}
                <Route path="/" exact component={HomePage} />
                {user.authenticated ? (
                  <>
                    <Redirect to="/AddNotes" />
                    <Route path="/AddNotes" exact component={AllNotes} />
                    <Redirect to="/Home" />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/SignIn" component={LoginHeader} />
                  </>
                ) : (
                  <>
                    <Route path="/SignIn" component={LoginHeader} />
                    <Route path="/Home" exact component={Home} />
                  </>
                )}
              </>
            ) : (
              "Loading..."
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
