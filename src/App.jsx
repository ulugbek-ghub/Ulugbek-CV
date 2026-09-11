import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ErrorPage = lazy(() => import('./pages/Error'));

const pathOrder = ['/', '/projects', '/contact', '/about'];

function computeIsForward(current, previous) {
  if (!previous) return true;
  const currentIndex = pathOrder.indexOf(current);
  const prevIndex = pathOrder.indexOf(previous);
  if (currentIndex !== -1 && prevIndex !== -1) {
    return currentIndex < prevIndex;
  }
  return true;
}

function App() {
  const location = useLocation();
  const [navigationState, setNavigationState] = useState({
    prevPathname: null,
    isForward: true,
  });

  if (location.pathname !== navigationState.prevPathname) {
    setNavigationState({
      prevPathname: location.pathname,
      isForward: computeIsForward(location.pathname, navigationState.prevPathname),
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition isForward={navigationState.isForward}>
                <Suspense fallback={null}><Home /></Suspense>
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition isForward={navigationState.isForward}>
                <Suspense fallback={null}><About /></Suspense>
              </PageTransition>
            } />
            <Route path="/projects" element={
              <PageTransition isForward={navigationState.isForward}>
                <Suspense fallback={null}><Projects /></Suspense>
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition isForward={navigationState.isForward}>
                <Suspense fallback={null}><Contact /></Suspense>
              </PageTransition>
            } />
            <Route path="*" element={
              <PageTransition isForward={navigationState.isForward}>
                <Suspense fallback={null}><ErrorPage /></Suspense>
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}

export default App;
