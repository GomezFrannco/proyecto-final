const { Router } = require("express");
const { handlers } = require("../controllers/users/controller.users");
const validateResource = require("../middlewares/validations.middlewares");
const requireUser = require("../middlewares/requireUser.middlewares")
const { createUserSchema } = require("../schemas/user.schemas");

const router = Router();

router.post("/api/users", validateResource(createUserSchema), handlers.post.createUserHandler);

// router.post("/api/user/verify/:id/:verificationCode", validateResource(verifyUserSchema), handlers.post.verifyUserHandler);

// router.post("/api/users/forgotpassword", validateResource(forgotPasswordSchema), handlers.post.forgotPasswordHandler);

// router.post("api/user/resetpassword/:id/:passwordResetCode", validateResource(resetPasswordSchema), handlers.post.resetPasswordHandler);

router.get("/api/users/me", requireUser, handlers.get.getCurrentUserHandler);

module.exports = router;
