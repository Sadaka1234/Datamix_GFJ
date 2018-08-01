var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
      username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          primaryKey: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      tipo: {
          type: Sequelize.STRING,
          allowNull: false
      }
  }, {
    tableName: 'User',
    timestamps: false,
    underscored: true,
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      });
      User.prototype.validPassword = function (password){
        console.log('Verificando contrasenia');
        return bcrypt.compareSync(password, this.password);
      }

      User.myname = function (){
        console.log("i'm returning my name");
        return this.username;
        }

    return User;
};
