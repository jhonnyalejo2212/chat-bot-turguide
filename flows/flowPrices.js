const { addKeyword } = require("@bot-whatsapp/bot");

const flowPrices = addKeyword(['3', 'precio'])
  .addAnswer(
    [
        'Es muuuy económico, clic aqui *www.minegocio.com*.',
        '*1*. Plan Básico 🥳',
        '*2*. Plan Medio 🥳'
    
    ])
    .addAnswer('Si deseas alguna otra consulta, por favor escribe la opcion *MENU*')

module.exports = flowPrices;