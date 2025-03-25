const admin = require("firebase-admin");
const serviceAccount = require("./config/lhphotos-firebase-adminsdk-fbsvc-6bd42ffd5c.json"); // your path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Replace with the actual UID of the user you want to make admin
const uid = "ga2zaP3MzmcvQinQrBOFkiU9NdG2";

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`✅ Custom claim 'admin: true' added to user: ${uid}`);
  })
  .catch(error => {
    console.error("❌ Error setting custom claim:", error);
  });
