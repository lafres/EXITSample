const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        user_id: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        user_nm: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        user_emad_nm: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        user_grad_cd: {
          type: Sequelize.STRING(1),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {}
}

module.exports = User;
