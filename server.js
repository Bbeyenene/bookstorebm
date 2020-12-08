const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 4001;
const app = express();
app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes");
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true }).then(() => console.log("Connected to MongoDB!!!!!!"));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});