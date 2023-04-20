const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * Esto se ejeuta cunado la persona escruibe "AGENTE"
 */
const flowAgent = addKeyword("2", { sensitive: true })
  .addAnswer(
   "Estamos desviando tu conversacion a nuestro agente 😊"
  )
  .addAction(async (ctx, {provider}) => {
    const nanoid = await import('nanoid')
    const ID_GROUP = nanoid.nanoid(5)
    const refProvider = await provider.getInstance()
    await refProvider.groupCreate(`Mi negocio (${ID_GROUP})`,[
        `${ctx.from}@s.whatsapp.net`,
    ])
  })
  .addAnswer('Te hemos agregado a un grupo con un asesor! Gracias👋')

module.exports = flowAgent;