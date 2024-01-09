const express = require("express");
const coursesRouter = require("./routes/courses")
require("dotenv").config();
const app = express();


app.use("/api/v1/courses", coursesRouter);




app.listen(process.env.PORT, () => {
    console.log("server runnnig");
});