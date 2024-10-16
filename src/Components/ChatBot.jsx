import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { questionsAndAnswers } from "../constants/datas";
import bot from "../img/robot.png";
import Typewriter from "typewriter-effect";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import chatbot from "../img/astronaut-LQ_BQU63.png";
import { IoClose } from "react-icons/io5";
import logo from "../img/Logo-TL.png";
import SendButton from "./CustomButton";
import { HandshakeRounded } from "@mui/icons-material";

const ChatbotModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [showFAQ, setShowFAQ] = useState(true);
  const [messages, setMessages] = useState([]);
  const [muteStates, setMuteStates] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const initialMessage = "Hey there, How can I assist you?";

  // Function to handle mute/unmute functionality for each response
  const handleMute = (index, ans) => {
    setMuteStates(!muteStates)
if(muteStates===false){
  speakAnswer(ans)
}else{
  speechSynthesis.cancel();

}
  };

  // Function to speak the bot's answer
  const speakAnswer = (text) => {
    const voices = speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) => voice.name.includes("Female") || voice.name.includes("Zira")
    );

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const tokenize = (text) => {
    return typeof text === "string"
      ? text.toLowerCase().trim().split(/\s+/)
      : [];
  };

  const calculateSimilarityScore = (inputTokens, questionTokens) => {
    return inputTokens.filter((token) => questionTokens.includes(token)).length;
  };

  const getBestAnswer = (input) => {
    if (input === "") {
      return "Enter something, Let me see how I can assist you";
    }

    const inputTokens = tokenize(input);
    let bestMatch = null;
    let highestScore = 0;

    for (const q of questionsAndAnswers) {
      const questionTokens = tokenize(q.question);
      const score = calculateSimilarityScore(inputTokens, questionTokens);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = q;
      }
    }

    return bestMatch
      ? bestMatch.answer
      : "Sorry, I couldn't find an answer to your question.";
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;

    setShowFAQ(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", words: userInput,timeStamp:getCurrentTime() },
    ]);

    setTimeout(() => {
      const response = getBestAnswer(userInput);
      setAnswer(response);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", words: response,timeStamp:getCurrentTime() },
      ]);
      
    }, 1000);

    setUserInput("");
  };

  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Initialize the bot's initial message and mute state
  useEffect(() => {
    if (!messages.some((msg) => msg.words === initialMessage)) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", words: initialMessage ,timeStamp:getCurrentTime() },
      ]);
    }
  }, []);
  const inputRef = useRef(null); // Create a ref for the input

  // Focus the input when the modal opens
  useEffect(() => {
    if (showModal && inputRef.current) {
      inputRef.current.focus(); // Focus the input when modal is shown
    }
  }, [showModal]);
  const modalContent = (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
        }}
        className="p-1 w-full max-w-md rounded-lg"
      >
        <div className="bg-white p-3 rounded-lg flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-4">
            <div className="rounded-full w-auto flex items-center justify-center">
              <img
                src="https://tltechnologies.net/assets/images/logo.svg"
                className="h-12 w-auto backdrop-blur-xl animate"
                title="How we can assist you"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-extrabold">TL Chat Bot</h2>
              <p className="text-gray-500 text-xs">
                 What should I call you?
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setShowModal(false);
              setAnswer("");
              setUserInput("");
              speechSynthesis.cancel();
            }}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <IoClose />
          </button>

          <div className="mt-4 max-h-[40vh] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {setHoveredIndex(null) ; setMuteStates(false); speechSynthesis.cancel();}}
                className={`${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                } flex w-full gap-2 items-start mb-2`}
              >
                <div
                  className={`text-xs w-fit max-w-[80%] p-1 px-2 text-white font-medium rounded-lg bg-blue-600 bg-opacity-70 ${
                    msg.sender === "bot"
                      ? "rounded-ss-none"
                      : "rounded-ee-none"
                  }`}
                >
                  {msg.sender === "bot" && index === messages.length - 1 ? (
                    <>
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString(msg.words).start();
                        }}
                        options={{
                          autoStart: true,
                          loop: false,
                          deleteSpeed: 50,
                          typeSpeed: 10,
                        }}
                      />
                      
                    </>
                  ) : (
                    msg.words
                  )}
                  <div className="text-stone-200 text-[8px] font-thin">
                        {getCurrentTime()}
                      </div>
                </div>
                {msg.sender === "bot" && hoveredIndex === index && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleMute(index, msg.words)}
                      className={`p-1 rounded-full text-white text-xs ${
                        muteStates===false ? "bg-gray-600" : "bg-blue-600"
                      }`} // Change color based on mute state
                    >
                      <HiOutlineSpeakerWave />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mb-4 flex gap-2 items-end">
            <input
              type="text"
              placeholder="Your question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full border h-full text-xs p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <SendButton onclick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        title="how can I assist you?"
        className="absolute top-0 right-0 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
      >
        <img src={bot} className="h-6 w-auto" alt="" />
      </button>
      {showModal && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ChatbotModal;
