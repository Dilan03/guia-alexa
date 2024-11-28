import AppRouter from "./AppRouter";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaComment } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap
import "./index.css"; // Estilos personalizados
//import ChatbotComponent from "./components/chatbot/Chatbot";
import 'react-chatbot-kit/build/main.css'
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => setShowChatbot(!showChatbot);
  return (
    <div className="App">
      <AppRouter />
      {/* Ícono de chat flotante */}
      <Button
        onClick={toggleChatbot}
        className="chatbot-btn"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          borderRadius: "50%",
          padding: "15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
        }}
      >
        <FaComment size={32} />
      </Button>

      {/* Chatbot solo visible cuando showChatbot es true */}
      {showChatbot && (
        <div style={{ position: "fixed", bottom: "100px", right: "20px", zIndex: 999 }}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
}

export default App;