import firebase from "../firebaseconfig/firebase";

export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    note,
  };
};

export const removeNote = (id) => {
  return {
    type: "REMOVE_NOTE",
    id,
  };
};

export const getNotes = () => {
  return async (dispatch) => {
    const firestore = firebase.firestore();
    // const functions = firebase.functions();
    // const sayhello = functions.httpsCallable("helloWorld");
    // await sayhello();
    try {
      const currentUser = await firebase.auth().currentUser;
      const uid = currentUser.uid;
      if (uid) {
        firestore
          .collection("users")
          .doc(uid)
          .collection("notes")
          .onSnapshot((snapShot) => {
            let localNotes = [];
            for (var index in snapShot.docs) {
              const note = snapShot.docs[index].data();
              localNotes.push({ id: snapShot.docs[index].id, ...note });
            }
            console.log(localNotes);
            dispatch({ type: "GET_NOTES_FROM_FIRESTORE", payload: localNotes });
          });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addNewNote = (note) => {
  return async () => {
    console.log("notes are", note);
    const firestore = firebase.firestore();
    const functions = firebase.functions();
    const sayNote = functions.httpsCallable("addNewNote");
    const data = {
      text: note.text,
      title: note.title,
    };
    await sayNote(data);
    //   try {
    //     const uid = await firebase.auth().currentUser.uid;
    //     if (uid) {
    //       await firestore
    //         .collection("users")
    //         .doc(uid)
    //         .collection("notes")
    //         .add({
    //           ...note,
    //         });
    //     }
    //   } catch (err) {
    //     console.log(err.message);
    //   }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    const firestore = firebase.firestore();
    try {
      const uid = await firebase.auth().currentUser.uid;
      console.log("user id", uid);
      console.log(id);
      if (uid) {
        await firestore
          .collection("users")
          .doc(uid)
          .collection("notes")
          .doc(id)
          .delete();
        dispatch(removeNote(id));
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};
