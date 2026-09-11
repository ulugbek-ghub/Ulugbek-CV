import { motion } from 'framer-motion';

const pageVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  enterReverse: { opacity: 0, x: -50 },
  exitReverse: { opacity: 0, x: 40 },
};

function PageTransition({ children, isForward }) {
  return (
    <motion.div
      initial={isForward ? "enter" : "enterReverse"}
      animate="center"
      exit={isForward ? "exit" : "exitReverse"}
      variants={pageVariants}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
