const jwt = require("jsonwebtoken");

function CheckAuth(req, res, next) {
  const token = req.cookies._security_expert || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify the token
  jwt.verify(token, process.env.MY_NEW_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next(); // Proceed to the next middleware or route handler
  });
}

module.exports =  CheckAuth;
