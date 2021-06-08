var Mongoose = require("mongoose");
var FollowSchema = new Mongoose.Schema(
  {
    followerId: {
      type: String,
      required: true,
    },

    followeeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

Follow = Mongoose.model("Follow", FollowSchema, "Follow");

module.exports = Follow;
