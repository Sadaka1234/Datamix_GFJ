/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BUS', {
    horaToma: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Asset_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    },
    A_Speed: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Curr_fLevel: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Curr_Temp: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'BUS'
  });
};
