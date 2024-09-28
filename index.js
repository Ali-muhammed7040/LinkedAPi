const axios = require("axios");

// Function to comment on a LinkedIn post
async function commentOnPost(accessToken, postId, commentText) {
  try {
    const response = await axios.post(
      "https://api.linkedin.com/v2/comments",
      {
        object: `urn:li:share:${postId}`, // Specify the post to comment on
        message: {
          text: commentText,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Comment posted successfully:", response.data);
  } catch (error) {
    console.error(
      "Error posting comment:",
      error.response ? error.response.data : error.message
    );
  }
}

// Example usage
const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with the OAuth token obtained from LinkedIn API
const postId = "POST_ID"; // Replace with the LinkedIn post ID to comment on
const commentText = "This is a sample comment from the LinkedIn API";

commentOnPost(accessToken, postId, commentText);
