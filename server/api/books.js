const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    //Fetch Books here!
  } catch (err) {
    next(err);
  }
});
