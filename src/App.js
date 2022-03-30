import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        {/* ৩। আমাদের ইভেন্ট হ্যান্ডেলার দিয়ে বানানো পাথ দিয়ে আমরা যেই কম্পোনেন্ট এ যেতে চাই ওরকম একটা ডাইনামিক কম্পোনেন্ট রাউট পাথ ইভেন্ড হ্যান্ডেলার পাথের সাহায্যে বানানো। এখানে friendId হলো একটা প্যারামিটার। এই প্যারামিটারে ভ্যালু পাঠাবে ইনভেন্ট হ্যান্ডেলার। */}
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>

        {/* Nested Routes */}
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>


        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
