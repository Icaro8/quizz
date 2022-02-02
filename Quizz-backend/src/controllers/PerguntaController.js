const Pergunta = require('../models/Pergunta');
const Alternativa = require('../models/Alternativa');
const Resposta = require('../models/Resposta');
const Sequelize = require('sequelize')

module.exports = {
  async index(req, res) {
    const perguntas = await Pergunta.findAll({
      attributes: {
        include: ['id', 'title', 'categoria'],
      },
    });

    res.json(perguntas);
  },

  async indexAll(req, res) {
    const perguntas = await Pergunta.findAll({
      include: [
        {
          model: Alternativa,
          as: 'alternativas',
          attributes: [
            'alternativa_a',
            'alternativa_b',
            'alternativa_c',
            'alternativa_d',
          ],
          include: {
            model: Resposta,
            as: 'resposta',
            attributes: ['resposta'],
          },
        },
      ],
      attributes: ['title', 'categoria', 'alreadyUsed'],
    });

    res.json(perguntas);
  },

  async getOne(req, res) {
    const pergunta = await Pergunta.findByPk(req.params.pergunta, {
      include: [
        {
          model: Alternativa,
          as: 'alternativas',
          attributes: [
            'alternativa_a',
            'alternativa_b',
            'alternativa_c',
            'alternativa_d',
          ],
          include: {
            model: Resposta,
            as: 'resposta',
            attributes: ['resposta'],
          },
        },
      ],
      attributes: ['title', 'categoria'],
    });

    if (!pergunta)
      return res.status(404).json({ error: 'pergunta não encontrada!' });
    return res.json(pergunta);
  },

  async store(req, res) {
    const {
      title,
      categoria,
      alternativa_a,
      alternativa_b,
      alternativa_c,
      alternativa_d,
      resposta_title,
    } = req.body;

    if (await Pergunta.findOne({ where: { title } }))
      return res.status(400).json({ error: 'Pergunta já existe' });

    const pergunta = await Pergunta.create({
      title,
      categoria,
    });

    var pergunta_id = pergunta.id;

    const alternativa = await Alternativa.create({
      pergunta_id,
      alternativa_a,
      alternativa_b,
      alternativa_c,
      alternativa_d,
    });

    var alternativa_id = alternativa.id;

    const resposta = await Resposta.create({
      alternativa_id,
      resposta: resposta_title,
    });

    res.json({ pergunta, alternativa, resposta });
  },

  async findRandom(req, res) {
    const perguntas = await Pergunta.findAll({order: Sequelize.literal('rand()'), limit: 10})

    if(!perguntas) {
      return res.status(400).json({err: "Erro ao buscar perguntas"})
    }

    return res.json(perguntas)
  }
};
