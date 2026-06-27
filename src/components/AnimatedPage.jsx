import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DirectionContext } from '../App';

const AnimatedPage = ({ children }) => {
  // Grab the current direction from the App.jsx provider
  const direction = useContext(DirectionContext);

  const animations = {
    // We multiply our 50px distance by the direction to reverse it dynamically
    initial: { opacity: 0, x: 50 * direction },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 * direction },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;