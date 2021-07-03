// ? external imports
const express = require("express")
const router = express.Router()

// ? internal imports


// TODO: post page
router.get("/", (req, res) => {
  res.send('this works!')
})

module.exports = router