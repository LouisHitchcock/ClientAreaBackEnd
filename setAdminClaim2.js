const admin = require("firebase-admin");
const serviceAccount = require("./config/lhphotos-firebase-adminsdk-fbsvc-6bd42ffd5c.json"); // your path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims("ga2zaP3MzmcvQinQrBOFkiU9NdG2", { admin: true }).then(() => {
  console.log("✅ Admin claim added");
});
