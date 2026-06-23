import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { BlogContext } from '../context/BlogContext';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <AnimatedPage>
        <div className="not-found-container">
          <h2>Article not found</h2>
          <p>The story you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="back-home-btn">Go back home</Link>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <article className="blog-details-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          <span>Back to Articles</span>
        </Link>

        <header className="article-header">
          <span className="category-pill">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
          
          <div className="article-meta">
            <div className="author-info">
              <div className="author-avatar">{post.author.charAt(0)}</div>
              <div>
                <div className="author-name">{post.author}</div>
                <div className="publish-date">
                  <Calendar size={14} />
                  {post.date} · <Clock size={14} /> {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="article-content">
          <p>{post.content}</p>
        </div>
      </article>
    </AnimatedPage>
  );
};

export default BlogDetails;