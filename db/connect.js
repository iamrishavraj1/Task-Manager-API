const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("DB connect"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
