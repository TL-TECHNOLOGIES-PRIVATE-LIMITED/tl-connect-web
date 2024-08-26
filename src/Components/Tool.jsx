import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const Tool = ({ children, isVisible, position }) => {
  if (!isVisible) return null;

  const tooltipStyles = {
    position: 'fixed',
    top: position.top,
    left: position.left,
    color: 'white',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={tooltipStyles}
    >
      {children}
    </motion.div>,
    document.body
  );
};

export default Tool;
