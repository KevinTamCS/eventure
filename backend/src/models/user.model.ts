import SequelizeModel, { Sequelize, DataTypes, Optional } from 'sequelize';
import { EventCategories, Formats } from '../types';

interface UserAttributes {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  onboardingComplete: boolean;
}

export type UserCreationAttributes = Optional<UserAttributes, any>;

export default (
  sequelize: Sequelize
): SequelizeModel.ModelDefined<UserAttributes, UserCreationAttributes> => {
  return sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    onboardingComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
