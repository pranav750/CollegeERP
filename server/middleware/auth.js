import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const isLoggedIn = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader)
    return res.status(401).json({ message: "User unauthenticated" });

  const token = authHeader.split(" ")[1];

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT);
  } catch (error) {
    return res.status(401).json({ message: "User unauthenticated" });
  }

  if (!decodedToken)
    return res.status(401).json({ message: "User unauthenticated" });

  next();
};

export default isLoggedIn;
