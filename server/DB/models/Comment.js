var Mongoose = require("mongoose");
var CommentSchema = new Mongoose.Schema(
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

    postId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

Comment = Mongoose.model("Comment", CommentSchema, "Comment");

module.exports = Comment;
