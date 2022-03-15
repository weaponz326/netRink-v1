/* eslint-disable @typescript-eslint/no-explicit-any */

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

  if (webhookEvent == "subscription.create") {
    await subscriptionCreateWebhookHandler(req.body);
    res.sendStatus(200);
  } else if (webhookEvent == "subscription.disable") {
    await subscriptionDisableWebhookHandler(req.body);
    res.sendStatus(200);
  }
});

export const subscriptionCreateWebhookHandler = async (data: any) => {
  let subscriptionRef: admin.firestore.CollectionReference;

  const accountId = data.customer.metadata.account;
  const suiteType = data.customer.metadata.suite;

  const subscriptionData = {
    subscription_type: data?.customer.metadata.subscription_type,
    billing_frequency: data?.customer.metadata.billing_frequency,
    number_users: data?.customer.metadata.number_users,
    email: data?.customer.email,
    status: "Active",
  };

  if (suiteType == "Personal") {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  } else if (suiteType == "Restaurant") {
    subscriptionRef = admin.firestore().collection("restaurant/module_settings/restaurant_subscription");
  } else {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  }

  subscriptionRef.doc(accountId).update(subscriptionData);
};

export const subscriptionDisableWebhookHandler = async (data: any) => {
  let subscriptionRef: admin.firestore.CollectionReference;

  const accountId = data.customer.metadata.account;
  const suiteType = data.customer.metadata.suite;

  const subscriptionData = {
    status: "Inactive",
  };

  if (suiteType == "Personal") {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  } else if (suiteType == "Restaurant") {
    subscriptionRef = admin.firestore().collection("restaurant/module_settings/restaurant_subscription");
  } else {
    subscriptionRef = admin.firestore().collection("personal/module_settings/personal_subscription");
  }

  subscriptionRef.doc(accountId).update(subscriptionData);
};

