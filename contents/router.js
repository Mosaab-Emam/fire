// create router instance
const router = require("express").Router();

const controller = require("./placeHolder.controller");

router.get("/", controller.get());
router.post("/", controller.addOne());
router.get("/:id", controller.getOne());
router.patch("/:id", controller.updateOne());
router.delete("/:id", controller.deleteOne());

module.exports = router;
