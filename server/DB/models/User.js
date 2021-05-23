var Mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { v4: uuid } = require("uuid");
const randomId = uuid();

var UserSchema = new Mongoose.Schema(
  {
    userId: {
      type: String,
      default: randomId,
    },
    username: {
      type: String,
      required: true,
    },
    name: String,
    email: {
      type: String,
      required: true,
    },
    bio: { type: String, default: "" },
    image: {
      type: String,
      default: `https://avatars.dicebear.com/api/human/${randomId}.svg`,
    },
    password: String,

    streamKey: {
      type: String,
      default: uuid(),
    },
  },
  { timestamps: true }
);

// UserSchema.methods.encrypt = (pass) => {
//   return bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.isValid = (pass) => {
//   return bcrypt.compareSync(pass, this.password);
// };

User = Mongoose.model("User", UserSchema, "Users");

module.exports = User;
