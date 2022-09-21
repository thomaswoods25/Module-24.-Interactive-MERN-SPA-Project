const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
    const { email, userId } = decoded;
    req.email = email;
    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
    next("Authentication failure");
  }
};

module.exports = checkLogin;
