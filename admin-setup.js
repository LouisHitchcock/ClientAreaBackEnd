// admin-setup.js
const admin = require("firebase-admin");

// Path to your downloaded service account file
const serviceAccount = require("./config/lhphotos-firebase-adminsdk-fbsvc-6bd42ffd5c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Replace this with your actual admin email
const adminEmail = "louishitchcock@gmail.com";

admin.auth().getUserByEmail(adminEmail)
  .then(user => {
    return admin.auth().setCustomUserClaims(user.uid, { admin: true });
  })
  .then(() => {
    console.log(`✅ Admin claim set for ${adminEmail}`);
  })
  .catch(console.error);
