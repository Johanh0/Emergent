import express from "express";
import geoip from "geoip-lite";
const weatherRouter = express.Router();

weatherRouter.get("/ip", (req, res) => {
  console.log(req.cookies.userIP);
  const geo = geoip.lookup("207.97.227.239");
  console.log(geo);
  res.json(geo);
});

export { weatherRouter };
