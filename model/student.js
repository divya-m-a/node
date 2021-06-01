'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Address}) {
      // define association here
      this.hasMany(Address,{foreignKey:'userId',as:'address'})
    }
    toJSON(){
      return{...this.get(),id: undefined}
    }




  };
  Student.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    name: {
    type: DataTypes.STRING,
    allowNull: false

    },
    images: {
      type: DataTypes.STRING,
      allowNull: false
      },
    depart: {
      type: DataTypes.STRING,
      allowNull: false 
     }, 
    },
    {
    sequelize,
    tableName:'students',
    modelName: 'Student',
  });
  return Student;
};