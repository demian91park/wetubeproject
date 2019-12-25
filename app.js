import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; 
const app = express();


const handleHome = (req, res) => res.send(`Hello from pc`);

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/",handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);
export default app;