import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { BlogContext } from '../context/BlogContext';
import './BlogDetails.css';
import { useNavigate } from 'react-router-dom';
import { Edit3, Trash2 } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const navigate = useNavigate();
  const { deletePost } = useContext(BlogContext);
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
      <div className="article-container">
        <h1>{post.title}</h1>
        <p className="author-info">By {post.author}</p>

        {/* PASTE THE BUTTONS HERE */}
        <div className="action-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate(`/edit/${post.id}`)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', color: '#374151', fontWeight: '600' }}
          >
            <Edit3 size={18} /> Edit
          </button>

          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this article?')) {
                deletePost(post.id);
                navigate('/');
              }
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', background: '#fee2e2', cursor: 'pointer', color: '#dc2626', fontWeight: '600' }}
          >
            <Trash2 size={18} /> Delete
          </button>
        </div>
        {/* END OF BUTTONS */}

        <div className="article-content">
          {post.content}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BlogDetails;