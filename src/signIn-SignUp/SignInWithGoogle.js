import React from "react";

import { useSelector } from "react-redux";

import firebase from "../firebaseconfig/firebase";

const SignInWithGoogle = () => {
  const user = useSelector((state) => state.user.currentUser);

  const onSubmit = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
  };

  const addData = async () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    await db.collection("users").add({
      fullname: this.state.name,
    });
    alert("data has been inserted in cloud");
  };

  return (
    <div>
      {user.authLoaded && !user.authenticated === true ? (
        <button
          type="button"
          className="btn btn-primary text-white w-auto"
          onClick={onSubmit}
        >
          Login With Google
        </button>
      ) : (
        <>
          {user.authLoaded && user.authenticated === true ? (
            <>
              {" "}
              <h5>{user.displayName}</h5>
              <button
                type="button"
                className="btn btn-primary text-white w-auto"
                onClick={onLogOut}
                data="sign-out-btn"
              >
                sign Out
              </button>
              <button
                className="btn btn-primary text-white ml-1"
                type="button"
                onClick={addData}
              >
                click to add firestore data
              </button>
            </>
          ) : (
            ""
          )}
        </>
      )}{" "}
      <br></br>
    </div>
  );
};
export default SignInWithGoogle;
