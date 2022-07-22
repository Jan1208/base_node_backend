import { DataTypes } from 'sequelize';
import db from '../../config/db';

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

// This function creates the Table, if not exist.
example.sync();

export default example;
