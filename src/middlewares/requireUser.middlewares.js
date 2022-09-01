const requireUser = (_req, res, next) => {
  // Utilizamos una variable almacenada localmente
  const user = res.locals.user;
  if (!user) {
    return res.status(401).redirect("/login");
  }
  return next();
};

module.exports = requireUser;
