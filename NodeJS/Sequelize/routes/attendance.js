const express = require('express');
const Attendance = require('../models/attendance');
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const attendance = await Attendance.create({
      user_id: req.body.user_id,
      event_cd: req.body.event_cd,
    });
    console.log(attendance);
    res.status(201).json(attendance);
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
