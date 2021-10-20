const { Router } = require("express");
const UserCrud = require("./user.crud");

const router = Router()


router.use("/user", UserCrud) // main api route for users operation
module.exports = router