import jwt from "jsonwebtoken";

export async function indentifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(409).json({
      message: "Token not provided",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);    
  } catch (err) {
    return res.status(401).json({
      message: "unAuthorized access",
    });
  }
  req.user = decoded;
  next();
}
