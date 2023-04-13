const Sequelize = require('sequelize');
class Event extends Sequelize.Model {
  static initiate(sequelize) {
    return super.init(
      {
        event_cd: {
          type: Sequelize.INTEGER(8),
          primaryKey: true,
          allowNull: false,
          autoIncrement: true, // 자동으로 증가하는 문자열 값으로 설정
        },
        event_nm: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        event_dt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        event_ctn: {
          type: Sequelize.STRING(1000),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Event',
        tableName: 'events',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }
  static associate(db) {}
}
module.exports = Event;
