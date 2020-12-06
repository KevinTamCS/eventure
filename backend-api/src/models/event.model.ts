import SequelizeModel, { Sequelize, DataTypes, Optional } from 'sequelize';
import { EventCategories, Formats } from '../types';

export interface EventAttributes {
  // Event Info
  title: string;
  organizer: string;  // UUID later
  category?: EventCategories;
  format?: Formats;
  language?: string;
  tags?: string[];

  // Event Date, Time, and Time Zone
  startDateTime: Date;
  endDateTime: Date;
  timeZone: string;  // Stringified JSON

  // Event Banner
  bannerImage?: string;

  // Event Details
  summary?: string;
  description?: string;

  // Event Metadata
  creationDateTime: Date;
  lastUpdateDateTime: Date;
}

export type EventCreationAttributes = Optional<
  EventAttributes,
  | 'category'
  | 'format'
  | 'language'
  | 'tags'
  | 'bannerImage'
  | 'summary'
  | 'description'
>;

export default (
  sequelize: Sequelize
): SequelizeModel.ModelDefined<EventAttributes, EventCreationAttributes> => {
  return sequelize.define('Event', {
    // Event ID
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    // Event Info
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    organizer: {
      type: DataTypes.STRING, // Switch to UUID later
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    format: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    // Event Time, Date, and Time Zone
    startDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeZone: {
      type: DataTypes.JSON,
      allowNull: false,
    },

    // Event Banner
    banner: {
      type: DataTypes.STRING, // link to AWS S3 image
    },

    // Event Details
    summary: {
      type: DataTypes.STRING(250),
    },
    description: {
      type: DataTypes.TEXT,
    },

    // Event Metadata
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
