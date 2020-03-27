const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PostComment = require('../models/blog/PostComment');
const User = require('../models/user/User');
const UserProfileImage = require('../models/user/UserProfileImage');

app.get('/get/comment/:commentId', async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await PostComment.findOne({
      _id: commentId
    })
    const user = await User.findOne({
      _id: comment.author
    })
    res.json({
      replies: comment.replies,
      updatedOn: comment.updatedOn,
      _id: comment._id,
      id: comment.id,
      author: user,
      post: comment.post,
      content: comment.content,
      publishedOn: comment.publishedOn,
      likes: comment.likes,
      dislikes: comment.dislikes,
      __v: comment._v
    });
  } catch(err) {
    console.log('err:', err)
    res.status(500)
  }
});


module.exports = app;
