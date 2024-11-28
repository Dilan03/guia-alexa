import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Button } from "react-bootstrap";
import { FaComment } from "react-icons/fa";
import ActionProvider from "../../chatbot/ActionProvider";
import MessageParser from "../../chatbot/MessageParser";
import ChatbotConfig from "../../chatbot/config";

const ChatbotComponent = () => {
   const [showChatbot, setShowChatbot] = useState(false);

   const toggleChatbot = () => setShowChatbot(!showChatbot);

   return (
      <div>
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
                  config={ChatbotConfig}
                  actionProvider={ActionProvider}
                  messageParser={MessageParser}
               />
            </div>
         )}
      </div>
   );
};

export default ChatbotComponent;