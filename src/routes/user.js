const express = require("express");
const userSchema = require("../models/user.js")

const router = express.Router();

//Create User
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));
});

module.exports = router;