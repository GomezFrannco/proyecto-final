const { Router } = require("express");
const { handlers } = require("../controllers/auth/controller.auth");
const validateResource = require("../middlewares/validations.middlewares");
const { createUserSchema } = require("../schemas/user.schemas");

const router = Router();

// login route
router.post("/api/sessions", validateResource(createUserSchema), handlers.post.createSessionHandler);

router.post("/api/session/refresh", handlers.post.refreshAccessTokenHandler);

module.exports = router;
