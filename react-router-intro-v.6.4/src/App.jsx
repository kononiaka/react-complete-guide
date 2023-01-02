import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import PostDetailPage, { loader as blogPostLoader } from './pages/PostDetail';
import NewPostPage, { action as blogPostAction } from './pages/NewPost';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
  <Route index element={<WelcomePage />} />
  <Route path="/blog" element={<BlogLayout />}>
    <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
    <Route path=":id" element={<PostDetailPage />} loader={blogPostLoader} />
  </Route>
  <Route path="/blog/new" element={<NewPostPage />} action={blogPostAction} />
</Route >));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
