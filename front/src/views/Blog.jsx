import { Link } from 'react-router-dom';
import PostCard from '../components/blog/PostCard';
import Footer from '../components/otros/Footer';
import Navbar from '../components/otros/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/posts')
      .then((response) => {
        const posts = response.data;
        setPosts(posts);
      })
      .catch((error) => {
        console.error('Error al obtener los posts del blog:', error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-[#d5bdaf]">
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <PostCard
                title={post.title}
                content={post.content}
                state={post.state}
                postImg={post.postImg}
                user_id={post.user_id}
              />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
