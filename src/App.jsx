import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error from './pages/Error';

const pageVariants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

function App() {
  const location = useLocation();

  return (
    <div style={{ overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.65, 0, 0.1, 1] }}>
              <Home />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.65, 0, 0.1, 1] }}>
              <About />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.65, 0, 0.1, 1] }}>
              <Projects />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.65, 0, 0.1, 1] }}>
              <Contact />
            </motion.div>
          } />
          <Route path="*" element={
            <motion.div variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: [0.65, 0, 0.1, 1] }}>
              <Error />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;