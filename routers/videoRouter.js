import express from "express";
import routes from "../routes";
import {
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
  } from "../controllers/videoController";
var videoRouter = express.Router();
export default videoRouter;


videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
/* 
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
*/