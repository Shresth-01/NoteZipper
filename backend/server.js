const express = require("express");
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require("./config/db");

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes')
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)

// --------------------------deployment------------------------------
__dirname = path.resolve();

if ("production" === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------


app.use(notFound);
app.use(errorHandler);
app.use(errorHandler);

const Port = process.env.PORT||5000
app.listen(Port,console.log(`Server started on port ${Port}`));