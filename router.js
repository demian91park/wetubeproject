import express from "express";
export const userRouter = express.Router();

const handleUser = (req, res) => res.send("User");
const handleUserEdit = (req, res) => res.send("User_edit");
const handleUserPassword = (req, res) => res.send("User_password");

userRouter.get("/", handleUser);
userRouter.get("/edit", handleUserEdit);
userRouter.get("/password", handleUserPassword);