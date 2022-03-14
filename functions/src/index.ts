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

export const paystackSubscriptionWebhook = functions.https.onRequest(async (req, res) => {
  const webhookEvent = req.body.event;

  const accountId = req.body.customer.metadata.account;
  const suiteType = req.body.customer.metadata.suite;

  if (webhookEvent == "subscription.create") {
    const subscriptionData = {
      subscription_type: req.body.customer.metadata.subscription_type,
      billing_frequency: req.body.customer.metadata.billing_frequency,
      number_users: req.body.customer.metadata.number_users,
      email: req.body.customer.email,
      status: "Active",
    };

    await subscriptionCreateWebhookHandler(accountId, suiteType, subscriptionData);
  }

  res.sendStatus(200);
});

export const subscriptionCreateWebhookHandler = async (accountId: string, suiteType: string, data: object) => {
  let subscriptionRef: admin.firestore.CollectionReference;

  if (suiteType == "Personal") {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  } else if (suiteType == "Restaurant") {
    subscriptionRef = admin.firestore().collection("restaurant/module_settings/restaurant_subscription");
  } else {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  }

  subscriptionRef.doc(accountId).set(data);
};

