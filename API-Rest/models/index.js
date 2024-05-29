const sequelize = require('../config/database');
const User = require('./user');
const OtherModel = require('./otherModels');

// Relaciones entre modelos (ejemplo)
User.hasMany(OtherModel);
OtherModel.belongsTo(User);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  // Crear usuario admin
  User.create({
    email: 'admin@example.com',
    password: 'Admin123!',
    role: 'Admin'
  });
});

module.exports = { User, OtherModel };
