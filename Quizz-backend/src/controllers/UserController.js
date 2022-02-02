const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  async store(req, res) {
    try {
      const {
        name,
        password,
        email,
      } = req.body;

      if (await User.findOne({ where: { email } }))
        return res.status(400).json({ error: 'Usuário já existe' });

      const is_admin = 0;

      const user = await User.create({
        is_admin,
        name,
        password,
        email,
      });

      const user_id = user.id;

      user.password = undefined;

      const token = jwt.sign(
        { id: user.id },
        '#@Klirineu_123',
        {
          expiresIn: 86400,
        }
      );

      return res.json({ user, token });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  async updatePoints(req, res) {
    try {
      const user_id = req.userId;
      const {
        pontuacao,
      } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: 'Usuário não existe' });
      }

      user.pontuacao += pontuacao

      await user.save()
      
      return res.json(user);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  async update(req, res) {
    try {
      const user_id = req.userId;
      const {
        name,
        password,
        email,
      } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: 'Usuário não existe' });
      }

      await user.update(
        {
          name,
          password,
          email,
        },
        { where: { id: user_id } }
      );

      return res.json(user);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  async delete(req, res) {
    const user_id = req.userId;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não existe' });
    }

    await user.destroy();

    return res.json();
  },

  //Lista todos os usuários cadastrados apenas com campo de id e nome.
  //Para detalhar usuário, utilizar /getUser&user=
  async listUsers(req, res) {
    const user = await User.findByPk(req.userId);
    if (!user) return res.status(404).json({ error: 'Usuário não existe' });
    if (!user.is_admin)
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para usar esse endpoint.' });

    const users = await User.findAll({
      attributes: ['id', 'name', 'last_name'],
    });

    return res.json(users);
  },

  //Retorna dado do usuário caso não seja especificado um ID.
  //Caso especificado, retorna dados do usuário
  async getUser(req, res) {
    const userId = req.userId;
    const selectedUser = req.query.user;

    const user = await User.findOne({
      where: {
        id: userId,
      },
      attributes: {
        exclude: ['password', 'id', 'createdAt', 'updatedAt'],
      },
    });
    if (!user)
      return res.status(404).json({ error: 'Usuário não encontrado.' });

    if (user.is_admin) {
      if (selectedUser) {
        const findUser = await User.findByPk(selectedUser, {
          attributes: { exclude: ['password'] },
        });
        return res.json(findUser);
      }
    }

    return res.json(user);
  },

  async isAdmin(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user)
      return res.status(404).json({ error: 'Usuário não encontrado.' });

    return res.status(200).json({ data: user.is_admin });
  },
};
