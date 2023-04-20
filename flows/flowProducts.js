const { addKeyword } = require("@bot-whatsapp/bot");

const flowProducts = addKeyword(['1']).addAnswer(
  [
    'Estos son los pasos que debes seguir para ser parte de nuesto gran equipo!!😊🙌:',
    '*1*. Ingresa a https://aplextm.com/',
    '*2*. Registra tus datos personales y de tu negocio',
    '*3*. Espera nuestra respuesta 🥳',
  ],
  null,
  null,
  []
).addAnswer('Si deseas alguna otra consulta, por favor escribe la opcion *MENU*')

module.exports = flowProducts;