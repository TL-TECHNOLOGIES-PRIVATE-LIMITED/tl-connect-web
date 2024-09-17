import React, { useState } from "react";
import ReactDOM from "react-dom";
import { questionsAndAnswers } from "../constants/datas"; 
import bot from '../img/robot.png'
import Typewriter from 'typewriter-effect';
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import chatbot from '../img/astronaut-LQ_BQU63.png'
import { IoVolumeMute } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from '../img/Logo-TL.png'
import SendButton from "./CustomButton";
const ChatbotModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true);
  const [mute,setMute]=useState(true)
  const handleMute = () => {
    setMute(!mute);
    if (mute===false) {
      // Stop speech synthesis when muted
      speechSynthesis.cancel();
    } else {
      // Start speech synthesis when unmuted
      const voices = speechSynthesis.getVoices();
  
      // Find a female voice
      const femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || voice.name.includes('Zira')
      );
    
      // Create a new utterance with the text
      const utterance = new SpeechSynthesisUtterance(answer);
      utterance.lang = 'en-US'; // Set the language
    
      // Set the found female voice (if available)
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
    
      utterance.rate = 1; // Adjust this for speech speed
      speechSynthesis.speak(utterance);
    }
  };
  
  
  const keywords = ["Being Digital", "SEO", "Content Marketing"];
  const speakAnswer = (text) => {
    if(mute===true){
        return
    }
    // Get the available voices
    const voices = speechSynthesis.getVoices();
  
    // Find a female voice
    const femaleVoice = voices.find(voice => 
      voice.name.includes('Female') || voice.name.includes('Zira')
    );
  
    // Create a new utterance with the text
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language
  
    // Set the found female voice (if available)
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
  
    utterance.rate = 1; // Adjust this for speech speed
    speechSynthesis.speak(utterance);
  };
  
  

  // Tokenizer function
// Tokenizer function
const tokenize = (text) => {
    // Check if text is a string
    if (typeof text !== 'string') {
      console.error("Expected a string input, but got:", text);
      return [];
    }
    return text.toLowerCase().trim().split(/\s+/);
  };
  

  // Calculate similarity score based on word matches
  const calculateSimilarityScore = (inputTokens, questionTokens) => {
    let score = 0;
    for (const token of inputTokens) {
      if (questionTokens.includes(token)) {
        score += 1;
      }
    }
    return score;
  };

  // Function to get the best matching answer
  const getBestAnswer = (input) => {
    if(input===""){
        speakAnswer("Enter something, Let me see how i can assist you")
        return "Enter something, Let me see how i can assist you"
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

    return bestMatch ? bestMatch.answer : "Sorry, I couldn't find an answer to your question.";
  };

  // Handle input submission and find answer
  const handleSubmit = () => {
    setLoading(true);
    setShowFAQ(false);
    
    setTimeout(() => {
      const response = getBestAnswer(userInput);
      setAnswer(typeof response === 'string' ? response : String(response));
      setLoading(false);
      if (mute===false) { // Only speak if not muted
        speakAnswer(response);
      }
    }, 1000);
  };
  
  

  // Chatbot modal content (rendered using createPortal)
  const modalContent = (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
  <div style={{backgroundImage:" linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"}} className="p-1 w-full max-w-md rounded-lg"><div className="bg-white  p-6 rounded-lg  relative overflow-hidden">
    {/* Chatbot Header */}
    <div className="flex items-center space-x-3 mb-4">
      <div className=" rounded-full w-auto flex items-center justify-center">
      <img src={logo} className="h-12 w-auto backdrop-blur-xl animate" title="How we can assist you" alt="" />

      </div>
      <div>
        <h2 className="text-xl font-extrabold">TL Chat Bot</h2>
        <p className="text-gray-500 text-xs">Hey there! What should I call you?</p>
      </div>
    </div>

    {/* Close button */}
    <button
      onClick={() => {setShowModal(false);setAnswer("");setUserInput("");speechSynthesis.cancel();}}
      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
    >
     <IoClose />

    </button>

    {/* Input Section */}
    <div className="mb-4 flex gap-2 items-end">
      <input
        type="text"
        placeholder="Your question..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-2 border h-full border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
    <SendButton onclick={handleSubmit}/>
    </div>

    {/* Submit button */}
 

    {/* Loader */}
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
  {loading ? (
    <div className="loader">
      <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
    </div>
  ) : answer ? (
   <div className="text-xs  z-20 flex gap-2">
    <div className="flex   ">

    <button
    onClick={handleMute}

      className={`p-1 rounded-full h-fit w-fit text-white ${!mute ? 'bg-blue-600' : 'bg-black'}`}
    >
      {!mute ? <HiOutlineSpeakerWave /> : <IoVolumeMute />}
    </button>
    </div>
    <p>


    <Typewriter
      onInit={(typewriter) => {
          typewriter
          .typeString(answer)
          .callFunction(() => {
              console.log("Typing complete!");
             
            })
            .start();
        }}
        options={{
            autoStart: true,
            loop: false,
            deleteSpeed: 50,
            typeSpeed: 10,
        }}
        />
        </p>
   </div>
  ):(      <div className="flex   ">

<button
onClick={handleMute}
      className={`p-1 rounded-full h-fit w-fit text-white ${!mute ? 'bg-blue-600' : 'bg-black'}`}
    >
      {!mute ? <HiOutlineSpeakerWave /> : <IoVolumeMute />}
    </button>
    </div>
  )}
</div>



    

    {/* FAQ section */}
 
  </div></div>
</div>

  );

  return (
    <div className="relative">
      {/* Chatbot button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-5 right-5   text-white  rounded-full "
      >
        <img src={bot} className="h-20 w-auto backdrop-blur-xl animate" title="How we can assist you" alt="" />
      </button>

      {/* Use createPortal to render modal content outside the root hierarchy */}
      {showModal && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default ChatbotModal;
