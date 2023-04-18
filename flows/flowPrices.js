const { addKeyword } = require("@bot-whatsapp/bot");

const flowPrices = addKeyword(['Saber el precio', 'precio'])
  .addAnswer(
    [
        'Es muuuy económico, clic aqui *www.turguide.app*.',
        '*1*. Plan Básico 🥳',
        '*2*. Plan Medio 🥳'
    
    ])

module.exports = flowPrices;