import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
const API_VERSION = "/api/v1";

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
