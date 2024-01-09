const express = require("express");
const coursesRouter = require("./routes/courses")

const app = express();


app.use("/api/v1/courses",coursesRouter);


 

app.listen(2000, () => {
    console.log("server runnnig");
});