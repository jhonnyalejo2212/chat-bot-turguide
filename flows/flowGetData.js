const { addKeyword } = require("@bot-whatsapp/bot");
const flowExit = require("./flowExit");

const delay = (ms) => new Promise((res => setTimeout(res, ms)))

let nombre;
let apellidos;
let telefono;

const flowGetData = addKeyword('4').addAnswer(
  ['Hola!', 'Para enviar el formulario necesito unos datos...', 'Escriba su *Nombre*'],
  { capture: true },
  async (ctx, { flowDynamic, endFlow }) => {
    nombre = ctx.body
    return flowDynamic(`Encantado *${nombre}*, continuamos...`)
  }
).addAnswer(
  ['También necesito tus dos apellidos'],
  { capture: true },

  async (ctx, { flowDynamic, endFlow }) => {
    apellidos = ctx.body
    return flowDynamic(`Perfecto *${nombre}*, por último...`)
  }
).addAnswer(
  ['Dejeme su número de teléfono y le llamaré lo antes posible.'],
  { capture: true },
  async (ctx, { flowDynamic, endFlow }) => {
    telefono = ctx.body
    await delay(2000)
    return flowDynamic(`Estupendo *${nombre}*! te dejo el resumen de tu formulario
          \n- Nombre y apellidos: *${nombre} ${apellidos}*
          \n- Telefono: *${telefono}*`)
  }
).addAnswer('Si deseas alguna otra consulta, por favor escribe la opcion *MENU*')

module.exports = flowGetData;