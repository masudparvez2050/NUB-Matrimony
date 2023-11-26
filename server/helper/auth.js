const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  }

  jwt.verify(token, "jwtkey", (err, decoded) => {
    if (err) {
      return res.json({ Error: "Token is not valid" });
    }

    req.name = decoded.name;
    next();
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
