const express = require('express');
const Event = require('../models/event');
const Attendance = require('../models/attendance');
const router = express.Router();

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        event_cd: req.body.event_cd,
        event_nm: req.body.event_nm,
        event_dt: req.body.event_dt,
        event_ctn: req.body.event_ctn,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.route('/:id').get(async (req, res, next) => {
  try {
    const attendance = await Attendance.findAll({
      include: {
        model: Event,
        where: {event_cd: req.params.id},
      },
    });
    console.log(attendance);
    res.json(attendance);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
