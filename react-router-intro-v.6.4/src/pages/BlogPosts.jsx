import Posts from '../components/Posts';
import { getPosts } from '../util/api';
import { useLoaderData } from 'react-router-dom';

function BlogPostsPage() {
  const loadedData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      {<Posts blogPosts={loadedData} />}
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}