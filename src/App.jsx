import { createContext, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BlogProvider } from './context/BlogContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import BlogDetails from './pages/BlogDetails';
import About from './pages/About';
import Articles from './pages/Articles';

export const DirectionContext = createContext(1);
const ROUTE_ORDER = ['/', '/articles', '/about', '/create', '/post'];

const AnimatedRoutes = () => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const direction = useRef(1);

  const getBaseRoute = (path) => {
    const base = path.split('/')[1];
    return base ? `/${base}` : '/';
  };

  const currentPath = getBaseRoute(location.pathname);
  const previousPath = getBaseRoute(prevPath.current);

  if (currentPath !== previousPath) {
    const currentIndex = ROUTE_ORDER.indexOf(currentPath);
    const prevIndex = ROUTE_ORDER.indexOf(previousPath);
    direction.current = currentIndex >= prevIndex ? 1 : -1;
    prevPath.current = location.pathname;
  }

  return (
    <DirectionContext.Provider value={direction.current}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </AnimatePresence>
    </DirectionContext.Provider>
  );
};

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main style={{ padding: '0 2rem', overflowX: 'hidden' }}>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;