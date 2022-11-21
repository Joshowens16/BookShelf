const db = require("./db");

// const { models } = require("./index");

const seed = async () => {
  await db.sync({ force: true });
};

seed();
