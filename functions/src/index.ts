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

export const paystackSubscriptionWebhook = async (data: any) => {
  const accountId = data.customer.metadata.account;
  const subscriptionData = {
    subscription_type: data.customer.metadata.subscription_type,
    billing_frequency: data.customer.metadata.billing_frequency,
    number_users: data.customer.metadata.number_users,
    email: data.customer.email,
    status: "Active",
  };

  const subscriptionRef = functions.firestore.collection.(
      "restaurant/module_settings/restaurant_subscription");

  await subscriptionRef.doc(accountId).set(subscriptionData);
};
