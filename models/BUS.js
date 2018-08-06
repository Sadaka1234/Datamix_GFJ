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
    A_Speed: { //Actual Speed
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Curr_fLevel: { //Fuel Level
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Curr_Temp: { //Engine Temperatura
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    Odometer: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Total_Fuel: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Engine_Hours: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    AE_Speed: { //Actual Engine Speed
      type: DataTypes.FLOAT,
      allowNull: false
    },
    AE_Torque: { //Actual Engine Torque
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    Acc_Ped_Pos: { //Accelerator Pedal Position
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    Brake_Switch: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cruise_Active: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PTO_Active: { 
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    Turbo_Pressure: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'BUS',
    timestamps: false,
    underscored: true
  });
};
