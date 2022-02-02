const { Model, DataTypes } = require("sequelize")

class Alternativa extends Model {
  static init (sequelize) {
    super.init({
      alternativa_a: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      alternativa_b: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      alternativa_c: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      alternativa_d: {
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
      tableName: "alternativas"
    }
    )
  }

  static associate(models) {
    this.belongsTo(models.Pergunta, { foreignKey: "pergunta_id", as: "pergunta" });
    this.hasOne(models.Resposta, { foreignKey: 'alternativa_id', as: 'resposta' });
  }
}

module.exports = Alternativa