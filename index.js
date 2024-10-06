// // // https://github.com/gfiocco/linkedin-node-api
// // // Source;

// // const axios = require("axios");

// // // Function to comment on a LinkedIn post
// // async function commentOnPost(accessToken, postId, commentText) {
// //   try {
// //     const response = await axios.post(
// //       "https://api.linkedin.com/v2/comments",
// //       {
// //         object: `urn:li:share:${postId}`, // Specify the post to comment on
// //         message: {
// //           text: commentText,
// //         },
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     console.log("Comment posted successfully:", response.data);
// //   } catch (error) {
// //     console.error(
// //       "Error posting comment:",
// //       error.response ? error.response.data : error.message
// //     );
// //   }
// // }

// // // Example usage
// // const accessToken = "ACoAAEXf-fcBN2jTSdLEr8JXHi1JOe6Uu_DhayQs"; // Replace with the OAuth token obtained from LinkedIn API
// // const postId = "7246959484059701251"; // Replace with the LinkedIn post ID to comment on
// // const commentText = "This is a sample comment from the LinkedIn API";

// // commentOnPost(accessToken, postId, commentText);

// // // linkedin.js
// // // require("dotenv").config();
// // // const axios = require("axios");

// // // const { ACCESS_TOKEN } = process.env;

// // // const commentOnPost = async (postUrn, commentText) => {
// // //   try {
// // //     const response = await axios.post(
// // //       `https://api.linkedin.com/v2/socialActions/${postUrn}/comments`,
// // //       {
// // //         actor: "urn:li:person:{YOUR_PERSON_URN}", // Replace with your actual person URN
// // //         message: {
// // //           text: commentText,
// // //         },
// // //       },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${ACCESS_TOKEN}`,
// // //           "Content-Type": "application/json",
// // //           "X-Restli-Protocol-Version": "2.0.0",
// // //         },
// // //       }
// // //     );

// // //     console.log("Comment posted successfully:", response.data);
// // //   } catch (error) {
// // //     console.error(
// // //       "Error posting comment:",
// // //       error.response ? error.response.data : error.message
// // //     );
// // //   }
// // // };

// // // // Example usage
// // // const postUrn = "urn:li:activity:123456789"; // Replace with the actual post URN
// // // const commentText = "This is my comment from LinkedIn API!";
// // // commentOnPost(postUrn, commentText);

// // // const express = require("express");
// // // const axios = require("axios");
// // // const app = express();
// // // const port = 3000;

// // // const clientId = "YOUR_CLIENT_ID"; // Replace with your LinkedIn app's client ID
// // // const clientSecret = "YOUR_CLIENT_SECRET"; // Replace with your LinkedIn app's client secret
// // // const redirectUri = "http://localhost:3000/auth/linkedin/callback"; // Replace with your redirect URI

// // // // Step 1: Redirect to LinkedIn for authorization
// // // app.get("/auth/linkedin", (req, res) => {
// // //   const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
// // //     redirectUri
// // //   )}&scope=w_member_social`;
// // //   res.redirect(authorizationUrl);
// // // });

// // // // Step 2: Handle LinkedIn redirect callback
// // // app.get("/auth/linkedin/callback", async (req, res) => {
// // //   const authorizationCode = req.query.code;

// // //   if (!authorizationCode) {
// // //     return res.status(400).send("Authorization code not found");
// // //   }

// // //   try {
// // //     // Step 3: Exchange authorization code for access token
// // //     const tokenResponse = await axios.post(
// // //       "https://www.linkedin.com/oauth/v2/accessToken",
// // //       null,
// // //       {
// // //         params: {
// // //           grant_type: "authorization_code",
// // //           code: authorizationCode,
// // //           redirect_uri: redirectUri,
// // //           client_id: clientId,
// // //           client_secret: clientSecret,
// // //         },
// // //         headers: {
// // //           "Content-Type": "application/x-www-form-urlencoded",
// // //         },
// // //       }
// // //     );

// // //     const accessToken = tokenResponse.data.access_token;
// // //     res.send(`Access Token: ${accessToken}`);
// // //   } catch (error) {
// // //     res
// // //       .status(500)
// // //       .send(`Error getting access token: ${error.response.data.error_description}`);
// // //   }
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Server is running at http://localhost:${port}`);
// // // });

// // // https://github.com/gfiocco/linkedin-node-api

// const clientId = "777bmwmfh61yun";
// const redirectUri = "http://localhost:4000/auth/linkedin/callback";
// const scope = "w_member_social r_liteprofile"; // Permissions needed to comment on posts
// const state = "random_state_string"; // A unique string to prevent CSRF

// const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
//   redirectUri
// )}&scope=${encodeURIComponent(scope)}&state=${state}`;

// console.log(authUrl);

// const axios = require("axios");

// const clientSecret = "<YOUR_CLIENT_SECRET>";
// const code = "<AUTHORIZATION_CODE>"; // The code received in the redirect

// const tokenUrl = "https://www.linkedin.com/oauth/v2/accessToken";

// async function getAccessToken() {
//   try {
//     const response = await axios.post(tokenUrl, null, {
//       params: {
//         grant_type: "authorization_code",
//         code: code,
//         redirect_uri: redirectUri,
//         client_id: clientId,
//         client_secret: clientSecret,
//       },
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//     console.log("Access Token:", response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.error("Error getting access token:", error.response.data);
//   }
// }

// getAccessToken();

const clientId = "777bmwmfh61yun";
const redirectUri = "http://localhost:4000/auth/linkedin/callback";
const scope = "w_member_social r_liteprofile";
const state = "random_state_string";

// const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
//   redirectUri
// )}&scope=${encodeURIComponent(scope)}&state=${state}`;

const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid%20email%20profile`;

console.log(authUrl);
