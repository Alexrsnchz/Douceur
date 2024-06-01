import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/misc/Navbar.jsx';
import BlogPostCard from '@/components/blog/PostCard';
import Footer from '@/components/misc/Footer.jsx';

function Blog() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios(`${apiUrl}/posts`);
        const data = response.data;
        const publishedPosts = data.filter(
          (post) => post.state === 'Publicado',
        );
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#f1e5d1] min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                postImg={post.postImg}
                title={post.title}
                content={post.content}
                date={post.created_at}
                author={post.user_id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
