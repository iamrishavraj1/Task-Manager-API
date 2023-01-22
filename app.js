const express = require("express");
const app = express();
const port = 3000;
const taskRouter = require("./routes/TaskRoute");
app.use(express.json());

app.use("/", taskRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
