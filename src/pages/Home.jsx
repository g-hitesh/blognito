import { useContext } from 'react';
import BlogCard from '../components/BlogCard';
import AnimatedPage from '../components/AnimatedPage';
import FeaturedSlider from '../components/FeaturedSlider'; 
import { BlogContext } from '../context/BlogContext';
import './Home.css';

const Home = () => {
  const { posts } = useContext(BlogContext);

  return (
    <AnimatedPage>
      <div className="home-container">
        
        <FeaturedSlider />

        <header className="home-header">
          <h1>Latest Articles</h1>
          <p>Discover insights, tutorials, and stories from our community.</p>
        </header>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;