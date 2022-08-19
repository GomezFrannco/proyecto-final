const requireUser = (_req, res, next) => {
  // Utilizamos una variable almacenada localmente
  const user = res.locals.user;
  if (!user) {
    return res.sendStatus(403);
  }
  return next();
};

module.exports = requireUser;
