import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "BeckyTube";
  res.locals.routes = routes;
  next();
};