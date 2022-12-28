const { Router } = require("express");
const { get, post } = require("../controllers/users/controller.users");
const validateResource = require("../middlewares/validations.middlewares");
const requireUser = require("../middlewares/requireUser.middlewares")
const { createUserSchema } = require("../schemas/user.schemas");

const router = Router();

router.post("/api/users", validateResource(createUserSchema), post.CreateUserHandler);

router.get("/api/health", (req, res) => {
  res.send("okkk")
})

router.get("/api/users/me", requireUser, get.GetCurrentUserHandler);

module.exports = router;
