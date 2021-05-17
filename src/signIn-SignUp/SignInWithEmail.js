import { useState } from "react";

import { useSelector } from "react-redux";

import firebase from "../firebaseconfig/firebase";
import Login from "./Login";

const SignInWithEmail = (props) => {
  const user = useSelector((state) => state.user.currentUser);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const clearInputs = () => {
    setemail("");
    setpassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("signed In");
    clearInputs();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("signedUp");
        const unverified_user = firebase.auth().currentUser;
        unverified_user
          .sendEmailVerification()
          .then(function () {
            firebase.auth().signOut();
            alert("Verification email sent");
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleSignOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       console.log("signout success");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      {/* {user ? (
        <Home handleSignOut={handleSignOut} />
      ) : ( */}
      <Login
        user={user}
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
      />
      {/* )} */}
    </div>
  );
};
export default SignInWithEmail;
