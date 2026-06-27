import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import AnimatedPage from '../components/AnimatedPage';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = useContext(BlogContext);

  // Find the specific post to edit
  const postToEdit = posts.find((p) => p.id === id || p.id === Number(id));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Pre-fill the form when the component loads
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    } else {
      // If someone types an invalid ID in the URL, send them home
      navigate('/');
    }
  }, [postToEdit, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the updated data to Context
    updatePost(postToEdit.id, {
      title,
      content,
    });

    navigate('/');
  };

  if (!postToEdit) return null;

  return (
    <AnimatedPage>
      <div className="write-container" style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#111827' }}>Edit Article</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            required
            style={{ padding: '1rem', fontSize: '1.25rem', borderRadius: '8px', border: '1px solid #d1d5db' }}
          />
          
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article content here..."
            required
            rows="12"
            style={{ padding: '1rem', fontSize: '1.1rem', borderRadius: '8px', border: '1px solid #d1d5db', resize: 'vertical' }}
          />
          
          <button 
            type="submit" 
            style={{ 
              padding: '1rem 2rem', 
              background: 'linear-gradient(135deg, #8A2387 0%, #E94057 50%, #F27121 100%)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}
          >
            Update Article
          </button>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Edit;