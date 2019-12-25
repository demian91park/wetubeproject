import app from "./app";
import express from "express";
export const userRouter = express.Router();

const PORT = 4100;

const handleListening = () => {
    console.log(`✅  Server Listening on: http://localhost:${PORT}`);
  };
  
app.listen(PORT, handleListening);
