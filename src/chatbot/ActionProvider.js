class ActionProvider {
   constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
   }

   // ActionProvider.js
   greet = () => {
      const message = this.createChatBotMessage("¡Hola!");
      this.addMessageToState(message);
   };

   bye = () => {
      const message = this.createChatBotMessage("Hasta Luego");
      this.addMessageToState(message);
   };

   borrarHistorial = () => {
      const message = this.createChatBotMessage(
         "Puedes decir: 'Alexa, borra lo que dije hoy' para eliminar las grabaciones diarias. Para eliminar grabaciones pasadas, abre la app Alexa, ve a Más > Configuración > Privacidad de Alexa > Consultar historial de voz y elimina todas las grabaciones."
      );
      this.addMessageToState(message);
   };

   ubicacionDispositivo = () => {
      const message = this.createChatBotMessage(
         "Es mejor colocar tu Alexa en espacios comunes y lejos de lugares sensibles como dormitorios u oficinas. Evita colocarlo cerca de ventanas o puertas para prevenir accesos externos o que otras personas escuchen tus interacciones."
      );
      this.addMessageToState(message);
   };

   apagarMicrofono = () => {
      const message = this.createChatBotMessage(
         "Puedes apagar el micrófono presionando el botón de 'Mute mic' en la parte superior del dispositivo. Esto ayuda a evitar grabaciones accidentales o activaciones no deseadas."
      );
      this.addMessageToState(message);
   };

   cambiarPalabraActivacion = () => {
      const message = this.createChatBotMessage(
         "Para cambiar la palabra de activación, di: 'Alexa, cambia la palabra de activación' o ve a la app Alexa en Dispositivos > Selecciona tu dispositivo > Palabra de activación > Elige una nueva palabra y confirma."
      );
      this.addMessageToState(message);
   };

   configurarComprasVoz = () => {
      const message = this.createChatBotMessage(
         "Puedes configurar un PIN para las compras por voz desde la app Alexa. Ve a Más > Configuración > Configuración de la cuenta > Compras de voz y activa un PIN para mayor seguridad."
      );
      this.addMessageToState(message);
   };

   borrarComandosVoz = () => {
      const message = this.createChatBotMessage(
         "Puedes borrar los comandos diarios diciendo: 'Alexa, borra lo que dije hoy'. Para eliminar grabaciones pasadas, abre la app Alexa y ve a Más > Configuración > Privacidad de Alexa > Consultar historial de voz y elimina todas las grabaciones."
      );
      this.addMessageToState(message);
   };

   riesgosNoBorrarHistorial = () => {
      const message = this.createChatBotMessage(
         "Existen tres riesgos principales si no borras el historial de voz: \n" +
         "1. **Exposición de información personal:** Podrían acceder a tus grabaciones, que pueden contener datos sensibles.\n" +
         "2. **Acceso no autorizado:** Si alguien obtiene acceso a tu cuenta de Amazon, podría escuchar tu historial de voz.\n" +
         "3. **Perfilamiento no deseado:** Amazon podría usar los datos para publicidad personalizada, creando un perfil detallado de ti sin tu pleno consentimiento."
      );
      this.addMessageToState(message);
   };

   riesgosComandosDiarios = () => {
      const message = this.createChatBotMessage(
         "No borrar los comandos de voz diariamente puede exponer tu información personal, ya que Alexa guarda tus interacciones para mejorar su funcionamiento. Si alguien accede a tu cuenta o dispositivo, podría obtener información sensible sobre tus hábitos o datos personales."
      );
      this.addMessageToState(message);
   };

   buenasPracticasBorrado = () => {
      const message = this.createChatBotMessage(
         "Para mantener tu privacidad, sigue estas buenas prácticas: \n" +
         "1. **Borra periódicamente el historial de voz:** Ve a la app de Alexa y configúralo para que el borrado sea automático si es posible.\n" +
         "2. **Ajusta las configuraciones de privacidad:** En la app de Alexa, revisa la sección de Privacidad para asegurarte de que tus datos estén protegidos."
      );
      this.addMessageToState(message);
   };

   configurarBorradoAutomatico = () => {
      const message = this.createChatBotMessage(
         "Puedes configurar el borrado automático de tus grabaciones en la app de Alexa. Ve a 'Más > Configuración > Privacidad de Alexa > Administrar tus datos de Alexa' y habilita el borrado automático en el periodo que prefieras."
      );
      this.addMessageToState(message);
   };

   riesgosUbicacionAlexa = () => {
      const message = this.createChatBotMessage(
         "Colocar un dispositivo Alexa en cualquier lugar de la casa puede presentar riesgos, como:\n" +
         "1. **Espionaje accidental:** Puede captar información privada o confidencial en lugares sensibles como dormitorios u oficinas.\n" +
         "2. **Acceso no autorizado:** Si alguien externo está en la misma habitación, podría interactuar con el dispositivo de forma intencionada o accidental y acceder a funciones sensibles."
      );
      this.addMessageToState(message);
   };

   buenasPracticasUbicacion = () => {
      const message = this.createChatBotMessage(
         "Para evitar problemas, sigue estas buenas prácticas al ubicar tu dispositivo Alexa:\n" +
         "1. **Colócalo en espacios comunes:** Evita discutir temas confidenciales en esos lugares.\n" +
         "2. **Ubicación estratégica:** Mantén el dispositivo alejado de ventanas, puertas o áreas donde un tercero pueda acceder desde el exterior."
      );
      this.addMessageToState(message);
   };


   riesgosMicrofonoCamara = () => {
      const message = this.createChatBotMessage(
         "Mantener el micrófono y la cámara activados cuando no se están usando puede conllevar riesgos como:\n" +
         "1. **Activación no deseada:** Puede captar conversaciones o ruidos no intencionados, derivando en grabaciones accidentales.\n" +
         "2. **Hacking:** Si alguien compromete el dispositivo, podría usar el micrófono o la cámara para espiar.\n" +
         "3. **Intrusión en la privacidad:** Errores o activaciones accidentales podrían enviar datos sensibles a los servidores de Amazon."
      );
      this.addMessageToState(message);
   };

   buenasPracticasMicrofonoCamara = () => {
      const message = this.createChatBotMessage(
         "Buenas prácticas para proteger tu privacidad:\n" +
         "1. **Desactiva el micrófono y la cámara:** Usa el botón de privacidad del dispositivo cuando no lo utilices.\n" +
         "2. **Revisa las grabaciones:** Regularmente elimina aquellas que no desees conservar."
      );
      this.addMessageToState(message);
   };

   riesgosPalabraActivacion = () => {
      const message = this.createChatBotMessage(
         "No cambiar la palabra de activación puede generar:\n" +
         "1. **Activación accidental:** 'Alexa' es una palabra común, lo que aumenta las respuestas no intencionadas.\n" +
         "2. **Control por terceros:** Cualquier persona que conozca la palabra predeterminada puede interactuar con el dispositivo sin tu consentimiento."
      );
      this.addMessageToState(message);
   };

   buenasPracticasPalabraActivacion = () => {
      const message = this.createChatBotMessage(
         "Sigue estas recomendaciones para gestionar la palabra de activación:\n" +
         "1. **Cámbiala a una palabra menos común:** Por ejemplo, 'Echo' o 'Amazon'.\n" +
         "2. **Educa a los miembros de tu hogar:** Enséñales cómo y cuándo usar el dispositivo."
      );
      this.addMessageToState(message);
   };

   riesgosComprasVoz = () => {
      const message = this.createChatBotMessage(
         "Configurar las compras por voz sin seguridad puede implicar:\n" +
         "1. **Compras no autorizadas:** Cualquier persona podría realizar compras con solo un comando.\n" +
         "2. **Errores accidentales:** El dispositivo podría interpretar mal un comando y realizar compras no deseadas."
      );
      this.addMessageToState(message);
   };

   buenasPracticasComprasVoz = () => {
      const message = this.createChatBotMessage(
         "Buenas prácticas para configurar compras por voz:\n" +
         "1. **Usa un PIN:** Configura un código PIN obligatorio para confirmar compras.\n" +
         "2. **Desactiva la función si no es indispensable:** Esto reduce riesgos de compras no autorizadas."
      );
      this.addMessageToState(message);
   };

   acercaHistorialVoz = () => {
      const message = this.createChatBotMessage(
         "El historial de voz en Alexa no es completamente privado. Los desarrolladores pueden acceder a tus grabaciones, y algunas no se pueden borrar del todo. Incluso aunque revises y borres tus grabaciones todas las noches, es posible que todavía se conserve un registro de grabaciones pasadas."
      );
      this.addMessageToState(message);
   };

   handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
         "Cada cierto tiempo, recibirás un recordatorio amistoso para que te acuerdes de borrar las grabaciones de Alexa. Esto es muy útil si quieres mantener tu historial limpio y sin dejar rastro de lo que has dicho.",
         {
            widget: "recordatorios",
         }
      );

      this.addMessageToState(message);
   };

   handeAcercaDe = () => {
      const message = this.createChatBotMessage(
         "Te explicaré de que trata esta aplicación",
         {
            widget: "acerca de",
         }
      );

      this.addMessageToState(message);
   }

   handleConfiguraciones = () => {
      const message = this.createChatBotMessage(
         "En la aplicación tenemos una sección interactiva que te guía paso a paso para mejorar la seguridad y privacidad de tu dispositivo Alexa.",
         {
            widget: "configuraciones",
         }
      );

      this.addMessageToState(message);
   }

   noPuedoResponder = () => {
      const message = this.createChatBotMessage(
         "Lo siento, no puedo ayudarte con eso. Si tienes alguna otra consulta, por favor pregúntame y trataré de ayudarte."
      );
      this.addMessageToState(message);
   };

   addMessageToState = (message) => {
      this.setState((prevState) => ({
         ...prevState,
         messages: [...prevState.messages, message],
      }));
   };
}

export default ActionProvider;