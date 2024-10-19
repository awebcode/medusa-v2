export const plugins = [
//   `medusa-fulfillment-manual`,
//   `medusa-payment-manual`,

//   {
//     resolve: "@medusajs/admin",
//     /** @type {import('@medusajs/admin').PluginOptions} */
//     options: {
//       autoRebuild: true,
//       serve: process.env.NODE_ENV === "development",
//       develop: {
//         open: process.env.OPEN_BROWSER !== "false",
//       },
//     },
//   },

//   {
//     // ** algolia plugin
//     resolve: `medusa-plugin-algolia`,
//     options: {
//       applicationId: process.env.ALGOLIA_APP_ID,
//       adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY,

//       settings: {
//         products: {
//           indexSettings: {
//             searchableAttributes: ["title", "description"],
//             attributesToRetrieve: [
//               "id",
//               "title",
//               "description",
//               "handle",
//               "thumbnail",
//               "variants",
//               "variant_sku",
//               "options",
//               "collection_title",
//               "collection_handle",
//               "images",
//             ],
//           },
//           transformer: (item) => {
//             // Extract titles and descriptions directly from item.metadata
//             return {
//               objectID: item.id,
//               title: item.title,
//               handle: item.handle,
//               thumbnail: item.thumbnail,
//               subtitle: item.subtitle,
//               tags: item.tags,
//               description: item.description,
//               material: item.material,
//               metadata: item.metadata, // Keep the original metadata as well if needed
//               collection_title: item.collection ? item.collection.title : "", // Adjusted to avoid potential undefined access
//               collection_handle: item.collection ? item.collection.handle : "", // Adjusted to avoid potential undefined access
//             };
//           },
//         },
//       },
//     },
//   },
  // ** Uncomment to add Stripe support

//   {
//     resolve: `medusa-payment-stripe`,
//     options: {
//       api_key: process.env.STRIPE_API_KEY,
//       // webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
//     },
//   },

  //*Cloudinary plugin
  {
    resolve: `medusa-file-cloudinary`,
    options: {
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    },
  },

//   // // ** Uncomment to add Twilio SMS support
//   {
//     resolve: `medusa-plugin-twilio-sms`,
//     options: {
//       account_sid: process.env.TWILIO_SMS_ACCOUNT_SID,
//       auth_token: process.env.TWILIO_SMS_AUTH_TOKEN,
//       from_number: process.env.TWILIO_SMS_FROM_NUMBER,
//     },
//   },

  // // ** Uncomment to add Email support
];
