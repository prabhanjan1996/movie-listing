const { Router } = require("express");
const { Resp } = require("src/helpers");
const UserRouter = require("./user")

const router = Router()

router.get("/", (req, res) => {
    Resp.success(res, "Welcome to NodeJS RESTFUL API")
})

router.use("/user", UserRouter)


module.exports = ApiRouter = router