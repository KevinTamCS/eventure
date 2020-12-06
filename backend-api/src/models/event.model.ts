import SequelizeModel, { Sequelize, DataTypes, Optional } from 'sequelize';

export interface EventAttributes {
  title: string;
  organizer: string;
  startDateTime: Date;
  endDateTime: Date;
  summary?: string;
  description?: string;
  banner?: string;
  creationDateTime: Date;
  lastUpdateDateTime: Date;
}

export type EventCreationAttributes = Optional<
  EventAttributes,
  'summary' | 'description' | 'banner'
>;

export default (
  sequelize: Sequelize
): SequelizeModel.ModelDefined<EventAttributes, EventCreationAttributes> => {
  return sequelize.define('Event', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    organizer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(250),
    },
    description: {
      type: DataTypes.TEXT,
    },
    banner: {
      type: DataTypes.STRING,
    },
    creationDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lastUpdateDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
