// let express = require("express");
// let router = express.Router();
// require("dotenv").config();

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const auth = require("../middleware/auth");

// // Register user
// router.route("/register").post(async (req, res) => {
//   try {
//     // Get user input
//     const { first_name, last_name, email, password } = req.body;

//     // Validate user input
//     if (!(email && password && first_name && last_name)) {
//       return res.status(400).send("All input is required");
//     }

//     // check if user already exist
//     // Validate if user exist in our database
//     const oldUser = await User.findOne({ email });

//     if (oldUser) {
//       return res
//         .status(409)
//         .send(
//           "User already exists. Please Login at https://crashpad.dev/login"
//         );
//     }

//     //Encrypt user password
//     encryptedPassword = await bcrypt.hash(password, 10);

//     // Create token
//     const token = jwt.sign(
//       { user_id: User._id, email },
//       "" + process.env.TOKEN_KEY,
//       {
//         expiresIn: "2h",
//       }
//     );

//     // Create user in our database
//     const user = await User.create({
//       first_name,
//       last_name,
//       email: email.toLowerCase(), // sanitize: convert email to lowercase
//       password: encryptedPassword,
//       token,
//     });
//     // save user token
//     user.token = token;

//     // return new user
//     console.log("Created new user" + user);
//     res.status(201).json(user);
//   } catch (err) {
//     console.log(err);
//   }
// });

// // Login
// router.route("/login").post(async (req, res) => {
//   try {
//     // Get user input
//     const { email, password } = req.body;

//     // Validate user input
//     if (!(email && password)) {
//       res.status(400).send("All input is required");
//     }
//     // Validate if user exist in our database
//     const user = await User.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       // Create token
//       const token = jwt.sign(
//         { user_id: user._id, email },
//         "" + process.env.TOKEN_KEY,
//         {
//           expiresIn: "2h",
//         }
//       );

//       // save user token
//       user.token = token;

//       // user
//       console.log("User logged in" + user);
//       res.status(200).json(user);
//     } else {
//       res.status(400).send("Invalid Credentials");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = router;
