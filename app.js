const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

/**
 * Flows
 */
const flowPrincipal = require("./flows/flowPrincipal");
const flowExit = require("./flows/flowExit");

/**
 * Funcion principal
 */
const main = async () => {
  const adapterDB = new JsonFileAdapter()
  const adapterFlow = createFlow([flowPrincipal, flowExit])
  const adapterProvider = createProvider(BaileysProvider)

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

  QRPortalWeb()
}

main()