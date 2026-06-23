import { createContext, useState } from 'react';
import { mockPosts as initialPosts } from '../data/mockPosts';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};