const ex = require("express");
const { route } = require("express/lib/application");

const router = ex.Router();

// creating the routes

//get all the courses

router.get("/", (req, res) => {
    res.send("hello this is your courses")
})

//get single course


//create courses

//delete courses

//update courses


module.exports = router