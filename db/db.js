const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('user_login', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  timestamps: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    sequelize.close();
  });


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db