var Mongoose = require("mongoose");

const { v4: uuid } = require("uuid");
const randomId = uuid();
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
      default: randomId,
    },

    status: {
      type: String,
      default: "Stream not having media input",
    },

    clintLink: {
      type: String,
      default: `http://127.0.0.1:8888/live/${randomId}/index.m3u8`,
    },

    serverLink: {
      type: String,
      default: "rtmp://127.0.0.1:1935/live",
    },
  },
  { timestamps: true }
);

Stream = Mongoose.model("Stream", StreamSchema, "Stream");

module.exports = Stream;
