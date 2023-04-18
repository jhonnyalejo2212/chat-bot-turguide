const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowExit = require("./flowExit");
const flowProducts = require("./flowProducts");
const flowAgent = require("./flowAgent");
const flowPrices = require("./flowPrices");


const flowPrincipal = addKeyword([EVENTS.WELCOME, 'menu'])
    .addAnswer('🙌 Hola bienvenido a *Turguide!*')
    .addAnswer(
        [
            "¿En que podemos ayudarte el dia de hoy?",
            "'Responda con el numero de la opcion!'",
            "",
            "*1* Quiero estar en Turguide!",
            "*2* Hablar con un asesor",
            "*3* Saber el precio",
            "*4* Salir",
        ],
        null,
        null,
        [flowProducts, flowAgent, flowPrices, flowExit]
      )

module.exports = flowPrincipal;