import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword,
    
  } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword);
export default userRouter;
// view how does the data look
// c function that looks for the data
/* EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
*/