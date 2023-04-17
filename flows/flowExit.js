const { addKeyword } = require("@bot-whatsapp/bot");

const flowExit = addKeyword(['Salir', 'salir'])
    .addAnswer(['🤗 Fue un gusto ayudarte, si tienes alguna otra inquietud, no olvides contactarnos. 👋'])

module.exports = flowExit;