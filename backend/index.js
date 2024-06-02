const express = require("express");
const connectToMongoose = require("./DatabaseConnect");
const cors = require("cors");
connectToMongoose();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// app.use(express.json());
app.use("/api/auth", require("./routes/Auth"));
app.use("/api/notes", require("./routes/Notes.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
