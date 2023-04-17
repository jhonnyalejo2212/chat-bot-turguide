const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flowExit = addKeyword(['Salir', 'salir'])
  .addAnswer(['🤗 Fue un gusto ayudarte, si tienes alguna otra inquietud, no olvides contactarnos. 👋'])

const flowProducts = addKeyword(['Quiero estar en Turguide!']).addAnswer(
  [
    'Estos son los pasos que debes seguir para ser parte de nuesto gran equipo!!😊🙌:',
    '*1*. Ingresa a https://turguide.app/',
    '*2*. Registra tus datos personales y de tu negocio',
    '*3*. Espera nuestra respuesta 🥳',
  ],
  null,
  null,
  []
).addAnswer('Volver al menu principal?',{
  buttons: [
    {
      body: "Volver al menu"
    },
  ]
})

const flowAgent = addKeyword(['Hablar con un asesor', 'asesor', 'Asesor'])
  .addAnswer(['😊Fue un gusto ayudarte, en breve un asesor *Turguide* se pondra en contacto contigo, hasta luego 👋.'])

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'Volver al menu'])
  .addAnswer('🙌 Hola bienvenido *Turguide*')
  .addAnswer('En que podemos ayudarte el dia de hoy?', {
    buttons: [
      {
        body: "Quiero estar en Turguide!"
      },
      {
        body: "Hablar con un asesor"
      },
      {
        body: "Salir"
      }
    ]
  },
    null,
    [flowProducts, flowAgent, flowExit]
  )

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
