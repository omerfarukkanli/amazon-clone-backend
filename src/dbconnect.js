const mongoose = require("mongoose");
require("dotenv").config()

module.exports = {
  connect() {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    const db = mongoose.connection;

    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("connected to database"));
  },
};