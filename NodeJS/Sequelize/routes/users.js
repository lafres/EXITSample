const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
  .route('/')
  .get(async (req, raes, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        user_id: req.body.user_id,
        user_nm: req.body.user_nm,
        user_emad_nm: req.body.user_emad_nm,
        user_grad_cd: req.body.user_grad_cd,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
