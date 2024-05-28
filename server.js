import "dotenv/config";
import express from "express";

const app = express();

app.use(express.static("dist"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
