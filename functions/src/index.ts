// const admin = require('firebase-admin');
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const paystackSubscriptionWebhook = functions.https.onRequest((req, res) => {
  const accountId = req.body.customer.metadata.account;
  const subscriptionData = {
    subscription_type: req.body.customer.metadata.subscription_type,
    billing_frequency: req.body.customer.metadata.billing_frequency,
    number_users: req.body.customer.metadata.number_users,
    email: req.body.customer.email,
    status: "Active",
  };

  const subscriptionRef = admin.firestore().collection("restaurant/module_settings/restaurant_subscription");
  subscriptionRef.doc(accountId).set(subscriptionData);

  res.sendStatus(200);
});
