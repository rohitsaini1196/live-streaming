const UserModel = require("./models/User");
const StreamModel = require("./models/Stream");
const PostModel = require("./models/Post");
const CommentModel = require("./models/Comment");
const FollowModel = require("./models/Follow");

module.exports = {
  User: UserModel,
  Stream: StreamModel,
  Post: PostModel,
  Comment: CommentModel,
  Follow: FollowModel,
};
