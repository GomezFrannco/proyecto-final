const { Router } = require("express");
const { handlers } = require("../controllers/auth/controller.auth");
const validateResource = require("../middlewares/validations.middlewares");
const { createSessionSchema } = require("../schemas/auth.schemas");

const router = Router();

// login route
router.post("/api/sessions", validateResource(createSessionSchema), handlers.post.createSessionHandler);

router.post("/api/sessions/refresh", handlers.post.refreshAccessTokenHandler);

module.exports = router;
