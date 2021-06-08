var Mongoose = require("mongoose");
var PostSchema = new Mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

Post = Mongoose.model("Post", PostSchema, "Post");

module.exports = Post;
