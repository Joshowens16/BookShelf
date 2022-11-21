const { setUseProxies } = require("immer");
const Sequelize = require("sequelize");
const db = require("./db");

const Books = db.define("books", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: Sequelize.STRING,
  },
  publishDate: {
    type: Sequelize.DATEONLY,
  },
  describe: {
    type: Sequelize.TEXT,
  },
});

module.exports = Books;
