const { addKeyword } = require("@bot-whatsapp/bot");

const flowMedia = addKeyword(['5'])
  .addAnswer('Enviando audio', {
    media: 'https://demo.4plbox.com/img/prueba-bot/audio.ogg',
  }).addAnswer('Enviando imagen', {
    media: 'https://demo.4plbox.com/img/prueba-bot/bot-image.png',
  }).addAnswer('Enviando documento PDF', {
    media: 'https://demo.4plbox.com/img/prueba-bot/pdf-test.pdf',
  })
  .addAnswer('Si deseas alguna otra consulta, por favor escribe la opcion *MENU*')

module.exports = flowMedia;