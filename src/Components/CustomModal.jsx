import React from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { MdNoteAlt } from "react-icons/md";

const SuccessModal = ({ showModal, closeModal, modalType, message ,url}) => {
  if (!showModal) return null;

  // Automatically close the modal after 5 seconds
  setTimeout(() => {
    closeModal();
      
    isSuccess&&window.open(url, '_blank');
  }, 6000);

  const isSuccess = modalType === 'success';

  return ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }} className='z-20 max-w-md w-full p-1 border-gray-300 relative rounded-lg shadow-lg'  style={{backgroundImage:`${isSuccess?"linear-gradient(to left top, #6bf282, #7af58c, #87f796, #94fa9f, #a0fca9, #9dfca4, #99fd9e, #96fd99, #83fb81, #70f866, #5bf546, #43f211)":"linear-gradient(to right top, #f26b77, #f86669, #fc6259, #ff6047, #ff6032, #ff6b29, #ff7520, #fe8014, #fd9325, #fca438, #fbb54b, #fbc45f)"}`}}>
          
          
      <div
        className="bg-white border border-gray-300 relative rounded-lg shadow-lg p-6 z-20 max-w-md w-full"
        
      >
        
        <div className="flex justify-between items-start mb-4 z-10">
          <h3 className={`text-2xl font-extrabold ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
            {isSuccess ? '🥰' : '🙄'}
          </h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            &#10005;
          </button>
        </div>
        <p className={`text-lg font-bold  mb-4 ${isSuccess ? 'text-green-500' : 'text-red-600 '}`}>
          {message} 
        </p >
        
        <p className='text-sm mb-2 flex'>

          {isSuccess ? ' ' : 'Please try again later.'}
        </p>
        <p className="font-bold">
  {isSuccess 
    ? "You’ll be redirected to WhatsApp for assistance" 
    : (
      <div className='flex gap-3 justify-start items-center'>
        <MdNoteAlt /> Please check all required fields.
      </div>
    )
  }
</p>
        <div className="flex justify-between space-x-4">
          
         
        </div>
      </div>
      </motion.div>
    </motion.div>,
    document.getElementById('modal-root') // This should match the div in index.html
  );
};

export default SuccessModal;
