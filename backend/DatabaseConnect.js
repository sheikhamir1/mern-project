const mongoose = require("mongoose");

const DatabaseUrl = "mongodb://127.0.0.1:27017/curdDb";
const connectToMongoose = () => {
  mongoose.connect(DatabaseUrl);
  console.log("Database connected");
};

module.exports = connectToMongoose;
