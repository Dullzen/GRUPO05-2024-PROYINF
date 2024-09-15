import { Sequelize } from 'sequelize';
import sequelize from '../database.js';
class User extends Sequelize.Model {};

User.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: Sequelize.DataTypes.STRING,
  email: {
    type: Sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false
  }}, {
    sequelize,
    timestamps: true,
  }
          
);

export default User;
