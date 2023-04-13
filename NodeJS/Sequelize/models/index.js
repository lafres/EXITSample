const Sequelize = require('sequelize');
const User = require('./user');
const Event = require('./event');
const Attendance = require('./attendance');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;

db.User = User;
db.Event = Event;
db.Attendance = Attendance;
User.initiate(sequelize);
Event.initiate(sequelize);
Attendance.initiate(sequelize);
User.associate(db);
Event.associate(db);
Attendance.associate(db);
module.exports = db;
