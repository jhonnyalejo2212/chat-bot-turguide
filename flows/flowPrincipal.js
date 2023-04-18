const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowExit = require("./flowExit");
const flowProducts = require("./flowProducts");
const flowAgent = require("./flowAgent");
const flowPrices = require("./flowPrices");


const flowPrincipal = addKeyword([EVENTS.WELCOME, 'Volver al menu'])
    .addAnswer('🙌 Hola bienvenido a *Turguide!*')
    .addAnswer('En que podemos ayudarte el dia de hoy?', {
        buttons: [
            {
                body: "Quiero estar en Turguide!"
            },
            {
                body: "Hablar con un asesor"
            },
            {
                body: 'Saber el precio'
            },
            {
                body: "Salir"
            }
        ]
    },
        null,
        [flowProducts, flowAgent, flowPrices, flowExit]
    )

module.exports = flowPrincipal;