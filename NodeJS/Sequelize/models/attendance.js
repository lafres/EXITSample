const Sequelize = require('sequelize');
class Attendance extends Sequelize.Model {
  static initiate(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
        },
        event_cd: {
          type: Sequelize.INTEGER(8),
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'attendance',
        tableName: 'Attendances',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(models) {
    Attendance.belongsTo(models.User, {foreignKey: 'USER_ID'});
    Attendance.belongsTo(models.Event, {foreignKey: 'EVENT_CD'});
  }
  static associate(db) {}
}
module.exports = Attendance;
