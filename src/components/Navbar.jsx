import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SquarePen, Search, X } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Handle the search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/articles?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false); 
      setSearchQuery('');     
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <LogoIcon size={48} />
            <span>Blognito</span>
          </Link>
        </div>

        <div className="navbar-center">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/articles" className={`nav-link ${location.pathname === '/articles' ? 'active' : ''}`}>Articles</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>

        <div className="navbar-right">

          {/* 3. The Expandable Search Form */}
          <form
            className={`nav-search-form ${isSearchOpen ? 'open' : ''}`}
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="nav-search-input"
            />

            <button
              type={isSearchOpen ? "submit" : "button"}
              className="icon-btn"
              onClick={() => !isSearchOpen && setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <button
                type="button"
                className="icon-btn close-btn"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={16} />
              </button>
            )}
          </form>

          <Link to="/create" className="create-btn">
            <SquarePen size={18} />
            <span>Write</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;