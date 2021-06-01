
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Student}) {
      // define association here
this.belongsTo(Student,{foreignKey:'userId',as:'student'})

    }
  };
  Address.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    
    address: {
     type: DataTypes.STRING,
     allowNull:false
    }
  }, {
    sequelize,
    tableName:'address',
    modelName: 'Address',
  });
  return Address;
};





