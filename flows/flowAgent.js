const { addKeyword } = require("@bot-whatsapp/bot");

const flowAgent = addKeyword(['2', 'asesor', 'Asesor'])
  .addAnswer(['😊Fue un gusto ayudarte, en breve un asesor *Turguide* se pondra en contacto contigo, hasta luego 👋.'])

module.exports = flowAgent;