const { Router } = require("express");
const { handlers } = require("../controllers/users/controller.users");
const validateResource = require("../middlewares/validations.middlewares");
const { createUserSchema } = require("../schemas/user.schemas");

const router = Router();

router.post("/api/users", validateResource(createUserSchema), handlers.post.createUserHandler);

module.exports = router;
