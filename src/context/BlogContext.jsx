import { createContext, useState, useEffect } from 'react';
import { mockPosts as initialPosts } from '../data/mockPosts';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // 1. Initialize State with Local Storage Logic
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blognito_posts');

    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    return initialPosts;
  });

  // 2. The Save Mechanism
  useEffect(() => {
    localStorage.setItem('blognito_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  // ... inside BlogProvider, below addPost and deletePost

  const updatePost = (id, updatedData) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, ...updatedData } : post
    ));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, deletePost, updatePost }}>
      {children}
    </BlogContext.Provider>
  );
};
