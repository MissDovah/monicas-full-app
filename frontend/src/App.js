// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Accordian from './components/Accordian/Accordian';
import Interests from './components/Interests/Interests';
import Columns from './components/Columns/Columns';
import Posts from './components/Posts/Posts';
import PostsTwo from './components/PostsTwo/PostsTwo';
import PostsThree from './components/PostsThree/PostsThree';
import Events from './components/Events/Events';
import Requests from './components/Requests/Requests';
import AddOne from './components/AddOne/AddOne';
import AddTwo from './components/AddTwo/AddTwo';


function App() {
  return (
    <div className="App background">
      <Navbar />
      <Profile />
      <Accordian />
      <Interests />
      <Columns />
      <Posts />
      <PostsTwo />
      <PostsThree />
      <Events />
      <Requests />
      <AddOne />
      <AddTwo />
      <Footer />
      
    </div>
  );
}

export default App;
