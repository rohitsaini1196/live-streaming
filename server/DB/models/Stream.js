var Mongoose = require("mongoose");

const { v4: uuid } = require("uuid");

var StreamSchema = new Mongoose.Schema(
  {
    title: String,
    userId: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: `https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg`,
    },

    streamKey: {
      type: String,
      default: uuid(),
    },
  },
  { timestamps: true }
);

Stream = Mongoose.model("Stream", StreamSchema, "Stream");

module.exports = Stream;
