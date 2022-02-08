const mercadopago = require("mercadopago");
const fetch = require("node-fetch");
const User = require("../models/User");
const HistoricoFicha = require("../models/HistoricoFicha");

//REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel/credentials
//TEST-4805055530408040-073013-806939c741ac493a0ddb7d5cfc7caa10-798000392
mercadopago.configurations.setAccessToken(
  "APP_USR-4805055530408040-073013-0690393933b2e9f1a161399ed373c156-798000392"
);

module.exports = {
  createPreference(req, res) {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "http://localhost:3000/feedback",
        failure: "http://localhost:3000/feedback",
        pending: "http://localhost:3000/feedback",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        //console.log(response)
        res.json({ id: response.body.id });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  /**Após realizar o pagamento vai chamar um get passando o id do pagamento retornando os dados completos daquela compra podendo
   * salvar no bd o historico do pagamento e adicionar o valor na carteira do usuario
   */

  feedback(request, response) {
    response.json({
      Payment: request.query.payment_id,
      Status: request.query.status,
      MerchantOrder: request.query.merchant_order_id,
      user_id: request.userID,
    });
    console.log(request.userId);
    console.log(request.query);
    return response.json({ status: request.query.status });
  },

  async getPayment(req, res) {
    const { payment_id } = req.params;

    const token =
      "TEST-4805055530408040-073013-806939c741ac493a0ddb7d5cfc7caa10-798000392";
    const Auth = `Bearer ${token}`;

    await fetch(`https://api.mercadopago.com/v1/payments/${payment_id}`, {
      method: "GET",
      headers: {
        Authorization: Auth,
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(async function (data) {
        if (data.status === "approved") {
          const valor = data.transaction_details.total_paid_amount;
          const bonus = 0;

          const user_id = req.userId;
          const carteira_id = req.carteiraId;

          const user = await User.findByPk(user_id);

          if (!user) {
            return res.status(400).json({ error: "Usuário não existe" });
          }

          const carteira = await Carteira.findOne({
            where: { id: carteira_id },
          });

          carteira.valor = carteira.valor + valor;

          await carteira.save();

          if (!carteira) {
            return res.status(400).json({ error: "Carteira não foi criada" });
          }

          var data = new Date();
          var dia = String(data.getDate()).padStart(2, "0");
          var mes = String(data.getMonth() + 1).padStart(2, "0");
          var ano = data.getFullYear();
          data_at = dia + "/" + mes + "/" + ano;

          const historico_ficha = await HistoricoFicha.create({
            carteira_id,
            data_at,
            acao: "Compra de fichas",
            quantidade: valor,
            bonus,
            valor: valor,
            copa: "---",
          });

          console.log(carteira.valor, historico_ficha.acao);

          return res.json({
            text: `valor da carteira atualizado. Total: ${carteira.valor}`,
            acao: historico_ficha.acao,
          });
        }

        return res.json("Pagamento não aprovado");
      });
  },
};
