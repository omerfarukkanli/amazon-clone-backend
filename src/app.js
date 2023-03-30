const express = require('express')
const router= require("./routes/index")
const {connect} = require("./dbconnect")

const app = express()
app.use(express.json());
app.use(router);
connect()

app.listen(3000, () => {
    console.log("listening")
})