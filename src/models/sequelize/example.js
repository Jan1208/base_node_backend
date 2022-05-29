import { DataTypes } from 'sequelize';
import db from '../../config/db';
import log from '../../config/logging';

const MODEL_NAME = 'example';
const TABLE_NAME = 'example';

const example = db.define(
  MODEL_NAME,
  {
    exampleColumn1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exampleColumn2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
  },
);

example.sync().then(() => {
  log.info(`Table '${TABLE_NAME}' created successfully`);
});

export default example;
