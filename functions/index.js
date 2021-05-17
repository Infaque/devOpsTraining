const functions = require("firebase-functions");

const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

const adddata = (values, uid) => {
  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .collection("notes")
    .add(values);
};

exports.addNewNote = functions.https.onCall((data, context) => {
  console.log("data is ", data);
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "only authenticated user can make request"
    );
  }
  const values = {
    text: data.text,
    title: data.title,
  };
  adddata(values, context.auth.uid);
});
