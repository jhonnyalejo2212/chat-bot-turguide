const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flowPrincipal = require("./flows/flowPrincipal");

const main = async () => {
  const adapterDB = new JsonFileAdapter()
  const adapterFlow = createFlow([flowPrincipal])
  const adapterProvider = createProvider(BaileysProvider)

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

  QRPortalWeb()
}

main()