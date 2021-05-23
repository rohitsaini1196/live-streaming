const { User } = require("../DB/dbModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  test: (req, res) => {
    console.log("from rwegister ggd");
    res.send("test success");
  },

  register: async (req, res) => {
    const { name, username, password, email } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).send("Email already exists");
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getUsers: async (req, res) => {
    try {
      console.log(req.user);
      const users = await User.find().lean();
      res.json(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async (req, res) => {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Email not found");
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).send("Invalid Password");
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).send(token);
  },

  getUserByusername: async (req, res) => {
    const { username } = req.params;

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).send("User not found");
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

// module.exports = {
//   register: async (req, res) => {
//     console.log("from rwegister ggd");

//     var result = await UserModel.findOne({ email: req.body.email }).lean();
//     if (!result) {
//       var data = {
//         name: req.body.name,
//         email: req.body.email,
//         password: await passwordHelper.cryptPassword(req.body.password),
//         image: "",
//       };
//       var newUser = new UserModel(data);
//       await newUser.save().then((docs) => {
//         //  console.log(docs);
//         var user = {
//           id: docs._id,
//           name: docs.name,
//           email: docs.email,
//           image: docs.image,
//         };
//         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: "24h",
//         });
//         res.status(200).json({
//           accessToken,
//         });
//       });
//       // res.status(200).send("You already rocking");
//     } else {
//       res.status(200).send("User already exist from this email");
//     }
//   },

//   loginGet: async (req, res) => {
//     try {
//       var result = await UserModel.find().lean();
//       res.send(result);
//     } catch (e) {
//       res.send(e);
//     }
//   },

//   login: async (req, res) => {
//     console.log("from basic login page");

//     var result = await UserModel.findOne({ email: req.body.email }).lean();
//     if (!result) {
//       res.status(404).send("This email does not exist. Create an Account");
//     } else {
//       var check = await passwordHelper.comparePassword(
//         req.body.password,
//         result.password
//       );
//       if (check) {
//         var user = {
//           id: result._id,
//           name: result.name,
//           email: result.email,
//           image: result.image,
//         };
//         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: "24h",
//         });
//         res.status(200).json({
//           accessToken,
//         });
//       } else {
//         res.status(401).send("Username or password incorrect");
//       }
//     }
//   },

//   loginWithGoogle: async (req, res) => {
//     console.log("from login with google page");

//     var result = await UserModel.findOne({ email: req.body.email }).lean();
//     if (!result) {
//       var gData = {
//         name: req.body.name,
//         email: req.body.email,
//         image: req.body.image,
//         password: null,
//       };
//       var newUser = new UserModel(gData);
//       newUser.save().then((docs) => {
//         //     console.log(docs);

//         var user = {
//           id: docs._id,
//           name: docs.name,
//           email: docs.email,
//           image: docs.image,
//         };
//         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: "24h",
//         });
//         res.status(200).json({
//           accessToken,
//         });
//       });
//     } else {
//       if (1) {
//         console.log("from login with google else statement");

//         var user = {
//           id: result._id,
//           name: result.name,
//           email: result.email,
//           image: result.image,
//         };

//         console.log(user);

//         const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: "24h",
//         });
//         res.status(200).json({
//           accessToken,
//         });
//       } else {
//         res.status(401).send("Internal server error");
//       }
//     }
//   },

//   editProfile: async (req, res) => {
//     try {
//       var userId = req.params.userId;
//       var token = req.header("auth-token");
//       var decoded = jwtDecode(token);
//       var userIdFromToken = decoded.id;

//       var data = {
//         name: req.body.name,
//         bio: req.body.bio,
//         image: req.body.image,
//       };
//       console.log(data);

//       if (userId == userIdFromToken) {
//         UserModel.findByIdAndUpdate(
//           userId,
//           data,
//           { new: true },
//           (err, result) => {
//             if (err) {
//               res.status(500).send(err);
//             } else {
//               res.status(202).send("Profile updated");
//             }
//           }
//         );
//       } else {
//         res.status(401).send("Baap se bakchodi?");
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   },

//   forget: async (req, res) => {
//     try {
//       await UserModel.findOne({ email: req.body.email }).then((user) => {
//         if (user == null) {
//           res.status(403).send("Email not in DB");
//         } else {
//           const token = crypto.randomBytes(20).toString("hex");
//           const forgetDetails = {
//             email: user.email,
//             token: token,
//           };
//           const url = "http://localhost:3000/reset/" + token;
//           const newForgetDeatils = new ForgetPasswordModel(forgetDetails);
//           newForgetDeatils.save().then(() => {
//             res.status(200).json({
//               token: token,
//               name: user.name,
//               link: url,
//             });
//           });
//         }
//       });
//     } catch (error) {
//       res.send(error);
//     }
//   },

//   resetDataBaseData: async (req, res) => {
//     try {
//       var result = await ForgetPasswordModel.find().lean();
//       res.send(result);
//     } catch (e) {
//       res.send(e);
//     }
//   },

//   resetGet: async (req, res) => {
//     try {
//       var token = req.params.token;
//       await ForgetPasswordModel.findOne({ token: token }).then(
//         (userProcess) => {
//           if (userProcess == null) {
//             res
//               .status(403)
//               .send("This link is invalid, please use a valid link");
//           } else {
//             if (userProcess.valid) {
//               res.status(200).json({
//                 email: userProcess.email,
//                 resetId: userProcess._id,
//                 token: token,
//               });
//             } else {
//               res
//                 .status(404)
//                 .send("This link is invalid, please use a valid link");
//             }
//           }
//         }
//       );
//     } catch (error) {
//       res.send(error);
//     }
//   },

//   reset: async (req, res) => {
//     try {
//       var { token, email, password1, password2 } = req.body;
//       var conditions = {
//         email: email,
//       };
//       var hashedPassword = await passwordHelper.cryptPassword(password1);
//       var update = {
//         password: hashedPassword,
//       };
//       if (password1 == password2) {
//         const updateUser = await UserModel.findOneAndUpdate(conditions, update);
//         const updateResetQuery = await ForgetPasswordModel.findOneAndUpdate(
//           { token: token },
//           { valid: false }
//         );

//         Promise.all([updateUser, updateResetQuery])
//           .then((result) => {
//             return res.status(200).json(result);
//           })
//           .catch((err) => {
//             return res.status(400).json(err);
//           });
//       } else {
//         res.status(401).send("Both passwords doesn't match");
//       }
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   },

//   getUser: async (req, res) => {
//     try {
//       var id = req.params.id;
//       //  console.log(id);

//       await UserModel.findOne({ _id: id }).then((user) => {
//         // console.log(user);

//         if (user == null) {
//           res.status(404).send("User not found");
//         } else {
//           if (1) {
//             res.status(200).json({
//               email: user.email,
//               name: user.name,
//               id: user._id,
//               image: user.image,
//               bio: user.bio,
//               joinedCommunities: user.joinedCommunities,
//               joinedAt: user.createdAt,
//             });
//           } else {
//             res
//               .status(404)
//               .send("This link is invalid, please use a valid link");
//           }
//         }
//       });
//     } catch (error) {
//       res.send(error);
//     }
//   },
// };
