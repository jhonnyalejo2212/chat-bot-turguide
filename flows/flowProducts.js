const { addKeyword } = require("@bot-whatsapp/bot");

const flowProducts = addKeyword(['Quiero estar en Turguide!']).addAnswer(
  [
    'Estos son los pasos que debes seguir para ser parte de nuesto gran equipo!!😊🙌:',
    '*1*. Ingresa a https://turguide.app/',
    '*2*. Registra tus datos personales y de tu negocio',
    '*3*. Espera nuestra respuesta 🥳',
  ],
  null,
  null,
  []
).addAnswer('Volver al menu principal?', {
  buttons: [
    {
      body: "Volver al menu"
    },
  ]
})

module.exports = flowProducts;