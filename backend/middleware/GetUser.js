// const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "MYNAMEISAMIRSOHAILSHIEK";
const GetUser = (req, res, next) => {
  const authHeader = req.headers["auth-token"];
  //   const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader)
    return res.status(401).send({ error: "Authorization denied" });

  try {
    const Decoded = jwt.verify(authHeader, JWT_SECRET);
    // console.log(Decoded);
    req.user = Decoded.id;
    next();
  } catch (error) {
    // console.log(error);
    return res.status(401).send({ error: "Authorization denied" });
  }
};

module.exports = GetUser;
