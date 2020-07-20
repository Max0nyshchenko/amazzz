import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.error("SIGNIN USER:", signinUser);

  if (signinUser) {
    res.send({
      id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
    // res.send(signinUser);
  } else {
    console.error(error);
    res.status(401).send({ msg: "Invalid email or password" });
  }
});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Max",
      email: "max.0nyshenk03@gmail.com",
      password: "1234",
      isAdmin: true,
    });
    // const newUser = await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

export default router;
