import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import AnimatedPage from '../components/AnimatedPage';
import { BlogContext } from '../context/BlogContext';
import './Articles.css';

const Articles = () => {
  const { posts } = useContext(BlogContext);
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl !== null) {
      setSearchQuery(queryFromUrl);
    }
  }, [searchParams]);

  // Dynamically generate categories from live posts
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <AnimatedPage>
      <div className="articles-container">
        <header className="articles-header">
          <h1>All Articles</h1>
          <p>Browse our entire collection of tutorials, thoughts, and insights.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search by title or keyword..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or category filter to find what you're looking for.</p>
            <button className="clear-btn" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Articles;