import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="card-image-wrapper">
        <img src={post.imageUrl} alt={post.title} className="card-image" />
        <span className={`category-pill tag-${post.category.toLowerCase()}`}>
          {post.category}
        </span>
      </div>
      
      <div className="card-content">
        <Link to={`/post/${post.id}`} className="title-link">
          <h2>{post.title}</h2>
        </Link>
        <p className="excerpt">{post.excerpt}</p>
      </div>

      <div className="card-footer">
        <div className="author-info">
          <div className="author-avatar">{post.author.charAt(0)}</div>
          <span className="author-name">{post.author}</span>
        </div>
        
        <div className="meta-info">
          <span className="meta-item">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="meta-item">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;