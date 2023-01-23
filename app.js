require("./db/connect");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.port || 3000;
const taskRouter = require("./routes/TaskRoute");
const connectDB = require("./db/connect");

app.use(express.json());

app.use("/", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
