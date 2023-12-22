import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar, Header, Footer } from './components';
import PostListItemProvider from './store/Post-List-Context';
import { Outlet, useLoaderData } from 'react-router-dom';

function App() {

  const postData = useLoaderData();

  return (
    <PostListItemProvider posts={postData.posts}>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListItemProvider>

  )
}

export const getPosts = async () => {
  const postJsonData = await fetch("https://dummyjson.com/posts");
  const postData = postJsonData.json()
  return postData;
} 

export default App
