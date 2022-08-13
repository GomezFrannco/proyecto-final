const { Router } = require("express");
const { handlers } = require("../controllers/users/controller.users");

const router = Router();

router.post("/api/users", handlers.post.createUserHandler);

module.exports = router;
