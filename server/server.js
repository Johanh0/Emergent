// Imports
import 'dotenv/config' 
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ip from "ip";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 3000;
const API_VERSION = "/api/v1";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "../dist")));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

app.use((req, res, next) => {
  let USER_IP = ip.address();

  if (!req.cookies.userIP) {
    res.cookie("userIP", USER_IP, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  }

  next();
});

// Routes IMPORTS
import { adminRouter } from "./routes/admin.js";
import { userRouter } from "./routes/user.js";
import { weatherRouter } from "./routes/weather.js";

app.use(`${API_VERSION}/admin`, adminRouter);
app.use(`${API_VERSION}/user`, userRouter);
app.use(`${API_VERSION}/weather`, weatherRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
