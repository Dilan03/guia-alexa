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
      }

      if (lowercase.includes("borrar historial") || lowercase.includes("comandos de voz")) {
         this.actionProvider.borrarHistorial();
      }

      if (lowercase.includes("ubicación") || lowercase.includes("dónde colocar")) {
         this.actionProvider.ubicacionDispositivo();
      }

      if (lowercase.includes("apagar micrófono") || lowercase.includes("micrófono")) {
         this.actionProvider.apagarMicrofono();
      }

      if (lowercase.includes("cambiar palabra") || lowercase.includes("palabra de activación")) {
         this.actionProvider.cambiarPalabraActivacion();
      }

      if (lowercase.includes("compras por voz") || lowercase.includes("configurar compras")) {
         this.actionProvider.configurarComprasVoz();
      }
      if (lowercase.includes("cómo borrar comandos") || lowercase.includes("eliminar grabaciones")) {
         this.actionProvider.borrarComandosVoz();
      }

      if (
         lowercase.includes("riesgos historial") ||
         lowercase.includes("qué pasa si no borro historial") ||
         lowercase.includes("peligro historial")
      ) {
         this.actionProvider.riesgosNoBorrarHistorial();
      }

      if (
         lowercase.includes("riesgos comandos") ||
         lowercase.includes("qué pasa si no borro comandos") ||
         lowercase.includes("peligro comandos")
      ) {
         this.actionProvider.riesgosComandosDiarios();
      }


      if (
         lowercase.includes("buenas prácticas de borrado") ||
         lowercase.includes("buenas practicas de borrado") ||
         lowercase.includes("cómo proteger mi privacidad") ||
         lowercase.includes("consejos privacidad borrado")
      ) {
         this.actionProvider.buenasPracticasBorrado();
      }

      if (
         lowercase.includes("borrado automático") ||
         lowercase.includes("borrado automatico") ||
         lowercase.includes("configurar borrado") ||
         lowercase.includes("borrado periódico")
      ) {
         this.actionProvider.configurarBorradoAutomatico();
      }

      if (
         lowercase.includes("riesgos ubicación") ||
         lowercase.includes("dónde colocar alexa") ||
         lowercase.includes("ubicación alexa") ||
         lowercase.includes("es seguro colocar alexa")
      ) {
         this.actionProvider.riesgosUbicacionAlexa();
      }

      if (
         lowercase.includes("buenas prácticas ubicación") ||
         lowercase.includes("dónde poner alexa") ||
         lowercase.includes("consejos ubicación alexa") ||
         lowercase.includes("cómo colocar alexa")
      ) {
         this.actionProvider.buenasPracticasUbicacion();
      }

      if (
         lowercase.includes("riesgos micrófono") ||
         lowercase.includes("riesgos cámara") ||
         lowercase.includes("micrófono activado") ||
         lowercase.includes("cámara activada")
      ) {
         this.actionProvider.riesgosMicrofonoCamara();
      }

      if (
         lowercase.includes("buenas prácticas micrófono") ||
         lowercase.includes("buenas prácticas cámara") ||
         lowercase.includes("cómo proteger micrófono") ||
         lowercase.includes("cómo proteger cámara")
      ) {
         this.actionProvider.buenasPracticasMicrofonoCamara();
      }

      if (
         lowercase.includes("riesgos palabra activación") ||
         lowercase.includes("por qué cambiar la palabra") ||
         lowercase.includes("palabra de activación alexa")
      ) {
         this.actionProvider.riesgosPalabraActivacion();
      }

      if (
         lowercase.includes("buenas prácticas palabra activación") ||
         lowercase.includes("cómo cambiar la palabra") ||
         lowercase.includes("mejor palabra activación")
      ) {
         this.actionProvider.buenasPracticasPalabraActivacion();
      }

      if (
         lowercase.includes("riesgos compras por voz") ||
         lowercase.includes("compras no autorizadas") ||
         lowercase.includes("compras por error alexa")
      ) {
         this.actionProvider.riesgosComprasVoz();
      }

      if (
         lowercase.includes("buenas prácticas compras voz") ||
         lowercase.includes("cómo configurar compras") ||
         lowercase.includes("evitar compras no autorizadas")
      ) {
         this.actionProvider.buenasPracticasComprasVoz();
      }


      if (lowercase.includes("javascript") || lowercase.includes("js")) {
         this.actionProvider.handleJavascriptQuiz();
      }
   }
}

export default MessageParser;