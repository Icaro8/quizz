const { Model, DataTypes } = require("sequelize")

class Resposta extends Model {
  static init (sequelize) {
    super.init({
      resposta: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      
    },
    {
      sequelize,
      tableName: "resposta"
    }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "alternativa_id", as: "alternativa" });
  }
}

module.exports = Resposta