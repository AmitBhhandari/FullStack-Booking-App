const Sequelize = require("sequelize");
const sequelize = new Sequelize("appointment_app", "root", "Amitbhand68@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;