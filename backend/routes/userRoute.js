import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Max",
      email: "max.0nyshenk03@gmail.com",
      password: "1234",
      isAdmin: true,
    });

    const newUser = await user.save();
    console.log(newUser);
    console.log(user);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.send({ msg: error.message });
  }
});

export default router;
