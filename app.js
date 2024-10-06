// app.js
// require("dotenv").config();
const express = require("express");
const axios = require("axios");
const querystring = require("querystring");

const app = express();
const PORT = 4000;

// const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
const CLIENT_ID = "774d3b7t6pec5p";

const REDIRECT_URI = "http://localhost:4000/auth/linkedin/callback";
const CLIENT_SECRET = "WPL_AP1.355y8c1PDcjSk1T4.lP/PAA==";

// Step 1: Authorization URL
app.get("/auth", (req, res) => {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=w_member_social`;
  console.log("LEe");
  res.redirect(authUrl);
});

// Step 2: Handle Callback and Get Access Token
app.get("/callback", async (req, res) => {
  const { code } = req.query;
  if (!code) {
    code = "2d1cb0e9-59b0-452d-92d9-533c800ec206";
  }

  try {
    const tokenResponse = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      querystring.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      })
    );

    const { access_token } = tokenResponse.data;
    console.log("Access Token:", access_token);
    res.send(
      "Access Token Obtained! Check the console and update the .env file."
    );
  } catch (error) {
    console.error("Error fetching access token:", error.response.data);
    res.send("Error fetching access token. Check console for details.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
