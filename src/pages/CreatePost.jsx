import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { BlogContext } from '../context/BlogContext';
import './CreatePost.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(BlogContext);
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category,
      excerpt: formData.excerpt,
      content: formData.content,
      author: "Hitesh Kumar",
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.max(1, Math.ceil(formData.content.length / 800))} min read`,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    };

    addPost(newPost);
    navigate('/');
  };

  return (
    <AnimatedPage>
      <div className="create-post-container">
        <header className="create-header">
          <h1>Write a New Story</h1>
        </header>

        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              placeholder="Give your post a title..." 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category" 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              placeholder="e.g., React, Design, Personal" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Short Excerpt</label>
            <textarea 
              id="excerpt" 
              name="excerpt" 
              value={formData.excerpt} 
              onChange={handleChange} 
              placeholder="Write a 1-2 sentence summary..." 
              rows="2" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea 
              id="content" 
              name="content" 
              value={formData.content} 
              onChange={handleChange} 
              placeholder="Write your full story here..." 
              rows="10" 
              required 
            />
          </div>

          <button type="submit" className="submit-btn">Publish Post</button>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default CreatePost;