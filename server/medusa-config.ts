import { loadEnv, defineConfig, Modules } from "@medusajs/framework/utils";
import { plugins } from "./config/plugins";
loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  modules: {
    [Modules.PAYMENT]: {
      resolve: "@medusajs/payment",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/payment-stripe",
            id: "stripe",
            options: {
              apiKey: process.env.STRIPE_API_KEY,
            },
          },
        ],
      },
    },
    // {
    //   resolve: "@medusajs/medusa/file",
    //   options: {
    //     providers: [
    //       {
    //         resolve: `medusa-file-cloudinary`,
    //         id: "cloudinary",
    //         options: {
    //           cloud_name: process.env.CLOUD_NAME,
    //           api_key: process.env.CLOUD_API_KEY,
    //           api_secret: process.env.CLOUD_API_SECRET,
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "@medusajs/medusa/fulfillment",
    //   options: {
    //     providers: [
    //       {
    //         // ** algolia plugin
    //         resolve: `medusa-plugin-algolia`,
    //         options: {
    //           applicationId: process.env.ALGOLIA_APP_ID,
    //           adminApiKey: process.env.ALGOLIA_ADMIN_API_KEY,

    //           settings: {
    //             products: {
    //               indexSettings: {
    //                 searchableAttributes: ["title", "description"],
    //                 attributesToRetrieve: [
    //                   "id",
    //                   "title",
    //                   "description",
    //                   "handle",
    //                   "thumbnail",
    //                   "variants",
    //                   "variant_sku",
    //                   "options",
    //                   "collection_title",
    //                   "collection_handle",
    //                   "images",
    //                 ],
    //               },
    //               transformer: (item) => {
    //                 // Extract titles and descriptions directly from item.metadata
    //                 return {
    //                   objectID: item.id,
    //                   title: item.title,
    //                   handle: item.handle,
    //                   thumbnail: item.thumbnail,
    //                   subtitle: item.subtitle,
    //                   tags: item.tags,
    //                   description: item.description,
    //                   material: item.material,
    //                   metadata: item.metadata, // Keep the original metadata as well if needed
    //                   collection_title: item.collection ? item.collection.title : "", // Adjusted to avoid potential undefined access
    //                   collection_handle: item.collection ? item.collection.handle : "", // Adjusted to avoid potential undefined access
    //                 };
    //               },
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
  },

  // plugins,

  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
});
