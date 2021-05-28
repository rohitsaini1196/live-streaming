const { Stream } = require("../DB/dbModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

module.exports = {
  test: (req, res) => {
    console.log("from rwegister ggd");
    res.send("test success");
  },

  create: async (req, res) => {
    const { title, username, userId } = req.body;
    const stream = new Stream({
      title,
      username,
      userId,
    });

    try {
      const savedStream = await stream.save();
      res.json(savedStream);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getStreamByUsername: async (req, res) => {
    const { username } = req.params;
    console.log(username);
    try {
      const stream = await Stream.findOne({ username });
      if (!stream) {
        return res.status(404).send("Stream Not found");
      }
      res.status(200).json(stream);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getStreams: async (req, res) => {
    try {
      console.log(req.user);
      const streams = await Stream.find().lean();
      res.status(200).json(streams);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  deleteStream: async (req, res) => {
    const { username } = req.params;
    try {
      console.log("DeletingStream");
      const stream = await Stream.findOneAndRemove({ username });
      if (stream) {
        res.status(202).send("Stream of user" + username + "delete");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  //   register: async (req, res) => {
  //     const { name, username, password, email } = req.body;

  //     const emailExist = await User.findOne({ email });
  //     if (emailExist) {
  //       return res.status(400).send("Email already exists");
  //     }

  //     const salt = await bcrypt.genSalt(8);
  //     const hashedPassword = await bcrypt.hash(password, salt);

  //     const user = new User({
  //       name,
  //       username,
  //       email,
  //       password: hashedPassword,
  //     });

  //     try {
  //       const savedUser = await user.save();
  //       res.json(savedUser);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

  //   getUsers: async (req, res) => {
  //     try {
  //       console.log(req.user);
  //       const users = await User.find().lean();
  //       res.json(users);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

  //   login: async (req, res) => {
  //     const { password, email } = req.body;
  //     const user = await User.findOne({ email });
  //     if (!user) {
  //       return res.status(404).send("Email not found");
  //     }
  //     const validPass = await bcrypt.compare(password, user.password);
  //     if (!validPass) {
  //       return res.status(400).send("Invalid Password");
  //     }

  //     const token = jwt.sign(
  //       { _id: user._id, username: user.username },
  //       process.env.TOKEN_SECRET
  //     );

  //     res.header("auth-token", token).send(token);
  //   },

  //   getUserByusername: async (req, res) => {
  //     const { username } = req.params;

  //     try {
  //       const user = await User.findOne({ username });
  //       if (!user) {
  //         return res.status(404).send("User not found");
  //       }

  //       var userDetails = {
  //         userId: user._id,
  //         name: user.name,
  //         username: user.username,
  //         bio: user.bio,
  //         image: user.image,
  //         createdAt: user.createdAt,
  //       };

  //       res.status(200).json(userDetails);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

  //   getUserByuserId: async (req, res) => {
  //     const { userId } = req.params;

  //     try {
  //       const user = await User.findOne({ _id: userId });
  //       if (!user) {
  //         return res.status(404).send("User not found");
  //       }

  //       res.status(200).json(user);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

  //   getStreamKey: async (req, res) => {
  //     const { username } = req.params;

  //     try {
  //       const user = await User.findOne({ username });
  //       if (!user) {
  //         return res.status(404).send("User not found");
  //       }

  //       res.status(200).json(user.streamKey);
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },

  //   generateStreamKey: async (req, res) => {
  //     const { username } = req.body;
  //     try {
  //       const user = await User.findOneAndUpdate(
  //         {
  //           username,
  //         },
  //         {
  //           streamKey: uuid(),
  //         }
  //       );
  //     } catch (error) {
  //       res.status(400).send(error);
  //     }
  //   },
};
