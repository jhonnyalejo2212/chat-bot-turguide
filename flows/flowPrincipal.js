const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowProducts = require("./flowProducts");
const flowAgent = require("./flowAgent");
const flowPrices = require("./flowPrices");
const flowGetData = require("./flowGetData");
const flowMedia = require("./flowMedia");

const delay = (ms) => new Promise((res => setTimeout(res, ms)))

const fecha = new Date();
const hora = fecha.getHours();

let flowPrincipal = null
// servicio desde cancelado hasta desde las 7PM hasta las 7AM
if (hora >= 19 && hora < 7) {
  flowPrincipal = addKeyword(['Hola', 'hola', 'MENU', 'menu']).addAnswer("En este momento no podemos ayudarte con tu consulta, por favor escribenos mañana desde las 7:00 AM y con gusto daremos respuesta a tus inquietudes. 😊")
} else {
  flowPrincipal = addKeyword(['Hola', 'hola', 'MENU', 'menu']).addAnswer(
    [
      '🙌 Hola bienvenido a *Aplex!*',
      "¿En que podemos ayudarte el dia de hoy?",
      "'Responda con el numero de la opcion!'",
      "",
      "*1* Quiero estar en Aplex!",
      "*2* Hablar con un asesor",
      "*3* Saber el precio",
      "*4* Necesito información",
      "*5* Enviar audio e imagen",
    ],
    { capture: true },
    async (ctx, { flowDynamic, endFlow, fallBack }) => {
      if (ctx.body === 'MENU' || ctx.body === 'menu') {
        await endFlow()
        await delay(1000)
        return await fallBack()
      }
    },
    [flowProducts, flowAgent, flowPrices, flowGetData, flowMedia]
  )
}


module.exports = flowPrincipal;