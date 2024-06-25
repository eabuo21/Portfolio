import React, { useState } from "react";
import { getAIResponse } from "../../Components/Open-AI/Aiintegrate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await getAIResponse(input);
      setOutput(response);
      setError("");
      setCopied(false); // Reset the copied state when new output is generated
    } catch (err) {
      setError("Failed to fetch AI response. Please try again.");
      setOutput("");
      setCopied(false); // Reset the copied state on error
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className="chat-modal-container fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="absolute bg-white w-full  bottom-[20px] w-[50vh]  h-[300px] right-[22px]        md:bottom-[20px]   md:absolute md:right-[50px] md:w-[700px] md:h-[300px] p-4 rounded-lg ">
        <button    
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-800 text-white text-xl rounded-full h-8 w-8 flex items-center justify-center"
        >
          &times;
        </button>
        <h1 className="text-2xl mb-4"> AI Chat</h1>
        <div className="mb-4">
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your prompt..."
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
        {error && <p className="text-red mt-2">{error}</p>}
        <div className="mt-4 flex items-center">
          <p className="mr-2">{output}</p>
          {output && (
            <button
              onClick={handleCopy}
              className="copy-button bg-gray-200 p-2 rounded text-gray-700 hover:bg-gray-300 relative"
            >
              {copied ? (
                <>
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="ml-2">Copied</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCopy} />
                  <span className="copy-tooltip absolute bg-black text-white p-1 rounded text-sm left-full ml-2 opacity-0 hover:opacity-100">
                    Copy
                  </span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
