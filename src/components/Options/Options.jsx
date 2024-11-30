import React from "react";

import "./Options.css";

const Options = (props) => {
   const options = [
      {
         text: "Notificaciones",
         handler: props.actionProvider.handleJavascriptQuiz,
         id: 1,
      },
      { text: "Acerca de", handler: props.actionProvider.handeAcercaDe, id: 2 },
      { text: "Configuraciones", handler: props.actionProvider.handleConfiguraciones, id: 3 },
   ];

   const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
         {option.text}
      </button>
   ));

   return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;