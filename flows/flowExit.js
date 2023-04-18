const { addKeyword } = require("@bot-whatsapp/bot");

const flowExit = addKeyword(['4','Salir', 'salir'])
    .addAnswer(['🤗 Fue un gusto ayudarte, si tienes alguna otra inquietud, no olvides contactarnos. 👋'])

module.exports = flowExit;