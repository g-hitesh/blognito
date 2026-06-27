import { createContext, useState, useEffect } from 'react';
import { mockPosts as initialPosts } from '../data/mockPosts';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // 1. Initialize State with Local Storage Logic
  const [posts, setPosts] = useState(() => {
    // Check if we already have saved posts in the browser
    const savedPosts = localStorage.getItem('blognito_posts');

    if (savedPosts) {
      // If we do, parse the JSON string back into a JavaScript array
      return JSON.parse(savedPosts);
    }
    // If not (like on the very first visit), use the mock data
    return initialPosts;
  });

  // 2. The Save Mechanism
  // This useEffect runs every single time the 'posts' array changes.
  useEffect(() => {
    // We must convert the array to a JSON string before saving it to localStorage
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
