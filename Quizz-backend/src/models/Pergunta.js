const { Model, DataTypes } = require("sequelize")

class Pergunta extends Model {
  static init (sequelize) {
    super.init({
      title: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      categoria: {
        type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
      },
      alreadyUsed: {
        type: DataTypes.BOOLEAN,
        field: 'alreadyUsed',
        defaultValue: false
      }
    },
    {
      sequelize,
      tableName: "perguntas"
    }
    )
  }

  static associate(models) {
    this.hasOne(models.Alternativa, { foreignKey: 'pergunta_id', as: 'alternativas' });
  }
}

module.exports = Pergunta