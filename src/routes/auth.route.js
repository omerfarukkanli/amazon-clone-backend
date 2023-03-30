const express = require("express")
const { SingUp } = require("../controllers/authendication.contoller")
const router = express.Router()

router.post("/signup",SingUp )
module.exports = router