import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import './FeaturedSlider.css';

const FeaturedSlider = () => {
  const { posts } = useContext(BlogContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPosts = posts.slice(0, 3);

  // The Auto-Scroll Logic
  useEffect(() => {
    if (featuredPosts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Cleanup the timer if the component unmounts
    return () => clearInterval(timer);
  }, [featuredPosts.length, currentIndex]);

  if (featuredPosts.length === 0) return null;

  return (
    <div className="slider-container">
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {featuredPosts.map((post) => (
          <div key={post.id} className="slide">
            <img src={post.imageUrl} alt={post.title} className="slide-image" />
            
            <div className="slide-overlay">
              <div className="slide-content">
                <span className={`category-pill tag-${post.category.toLowerCase()}`}>
                  {post.category}
                </span>
                <Link to={`/post/${post.id}`} className="slide-title-link">
                  <h2>{post.title}</h2>
                </Link>
                <p className="slide-excerpt">{post.excerpt}</p>
                
                <div className="slide-meta">
                  <div className="author-info">
                    <div className="author-avatar">{post.author.charAt(0)}</div>
                    <span>{post.author}</span>
                  </div>
                  <span className="meta-dot">•</span>
                  <span><Calendar size={14} /> {post.date}</span>
                  <span className="meta-dot">•</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;