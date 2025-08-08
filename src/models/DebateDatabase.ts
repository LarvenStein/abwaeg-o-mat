import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const DebateDatabase = sequelize.define(
  "Debates",
  {
    uuid: { type: DataTypes.UUIDV4, primaryKey: true },
    data: DataTypes.STRING,
    expiry: DataTypes.DATE,
    encrypted: DataTypes.BOOLEAN,
  },
  { timestamps: false }
);

sequelize.sync();

export { DebateDatabase };
