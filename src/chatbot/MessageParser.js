class MessageParser {
   constructor(actionProvider) {
      this.actionProvider = actionProvider;
   }

   parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      // MessageParser.js
      if (lowercase.includes("hola")) {
         this.actionProvider.greet();
      } else if (lowercase.includes("adios") || lowercase.includes("adiós") || lowercase.includes("bye")) {
         this.actionProvider.bye();
      } else if (lowercase.includes("borrar historial de voz") || lowercase.includes("comandos de voz") || lowercase.includes("comando de voz") || lowercase.includes("borrar el historial de voz") || lowercase.includes("borro el historial de voz")) {
         this.actionProvider.borrarHistorial();
      } else if (
         lowercase.includes("historial de voz") ||
         lowercase.includes("grabaciones") ||
         lowercase.includes("registro de voz") ||
         lowercase.includes("conversaciones grabadas") ||
         lowercase.includes("privacidad de voz") ||
         lowercase.includes("datos de voz") ||
         lowercase.includes("archivos de voz")
      ) {
         this.actionProvider.acercaHistorialVoz();
      } else if (lowercase.includes("ubicación") || lowercase.includes("dónde colocar") || lowercase.includes("ubicacion") || lowercase.includes("donde colocar")) {
         this.actionProvider.ubicacionDispositivo();
      } else if (lowercase.includes("apagar micrófono") || lowercase.includes("micrófono") || lowercase.includes("apagar microfono") || lowercase.includes("microfono")) {
         this.actionProvider.apagarMicrofono();
      } else if (lowercase.includes("cambiar palabra") || lowercase.includes("palabra de activación") || lowercase.includes("palabra de activacion")) {
         this.actionProvider.cambiarPalabraActivacion();
      } else if (lowercase.includes("compras por voz") || lowercase.includes("configurar compras")) {
         this.actionProvider.configurarComprasVoz();
      } else if (lowercase.includes("cómo borrar comandos") || lowercase.includes("eliminar grabaciones")) {
         this.actionProvider.borrarComandosVoz();
      } else if (
         lowercase.includes("riesgos historial") ||
         lowercase.includes("que pasa si no borro historial") ||
         lowercase.includes("peligro historial")
      ) {
         this.actionProvider.riesgosNoBorrarHistorial();
      } else if (
         lowercase.includes("riesgos comandos") ||
         lowercase.includes("que pasa si no borro comandos") ||
         lowercase.includes("peligro comandos")
      ) {
         this.actionProvider.riesgosComandosDiarios();
      } else if (
         lowercase.includes("buenas prácticas de borrado") ||
         lowercase.includes("buenas practicas de borrado") ||
         lowercase.includes("cómo proteger mi privacidad") ||
         lowercase.includes("consejos privacidad borrado")
      ) {
         this.actionProvider.buenasPracticasBorrado();
      } else if (
         lowercase.includes("borrado automático") ||
         lowercase.includes("borrado automatico") ||
         lowercase.includes("configurar borrado") ||
         lowercase.includes("borrado periódico") ||
         lowercase.includes("borrado periodico")
      ) {
         this.actionProvider.configurarBorradoAutomatico();
      } else if (
         lowercase.includes("riesgos ubicacion") ||
         lowercase.includes("donde colocar alexa") ||
         lowercase.includes("ubicación alexa") ||
         lowercase.includes("es seguro colocar alexa")
      ) {
         this.actionProvider.riesgosUbicacionAlexa();
      } else if (
         lowercase.includes("buenas prácticas ubicacion") ||
         lowercase.includes("donde poner alexa") ||
         lowercase.includes("consejos ubicación alexa") ||
         lowercase.includes("como colocar alexa")
      ) {
         this.actionProvider.buenasPracticasUbicacion();
      } else if (
         lowercase.includes("riesgos microfono") ||
         lowercase.includes("riesgos camara") ||
         lowercase.includes("microfono activado") ||
         lowercase.includes("camara activada")
      ) {
         this.actionProvider.riesgosMicrofonoCamara();
      } else if (
         lowercase.includes("buenas practicas microfono") ||
         lowercase.includes("buenas practicas camara") ||
         lowercase.includes("cómo proteger micrófono") ||
         lowercase.includes("cómo proteger cámara") ||
         lowercase.includes("como proteger microfono") ||
         lowercase.includes("como proteger camara")
      ) {
         this.actionProvider.buenasPracticasMicrofonoCamara();
      } else if (
         lowercase.includes("riesgos palabra activacion") ||
         lowercase.includes("por que cambiar la palabra") ||
         lowercase.includes("palabra de activacion alexa")
      ) {
         this.actionProvider.riesgosPalabraActivacion();
      } else if (
         lowercase.includes("buenas practicas palabra activacion") ||
         lowercase.includes("como cambiar la palabra") ||
         lowercase.includes("mejor palabra activacion")
      ) {
         this.actionProvider.buenasPracticasPalabraActivacion();
      } else if (
         lowercase.includes("riesgos compras por voz") ||
         lowercase.includes("compras no autorizadas") ||
         lowercase.includes("compras por error alexa")
      ) {
         this.actionProvider.riesgosComprasVoz();
      } else if (
         lowercase.includes("buenas practicas compras voz") ||
         lowercase.includes("como configurar compras") ||
         lowercase.includes("evitar compras no autorizadas")
      ) {
         this.actionProvider.buenasPracticasComprasVoz();
      } else if (lowercase.includes("recordatorio") || lowercase.includes("notificaciones")) {
         this.actionProvider.handleJavascriptQuiz();
      } else if (lowercase.includes("acerca de") || lowercase.includes("explicacion de la app")) {
         this.actionProvider.handeAcercaDe();
      } else if (lowercase.includes("configuraciones")) {
         this.actionProvider.handleConfiguraciones();
      } else {
         this.actionProvider.noPuedoResponder();
      }

   }
}

export default MessageParser;