import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import Library from "./pages/Library";
import Article from "./pages/Article";
import Search from "./pages/Search";

function App() {
  return (
      <div>
          <Navbar/>
          <div className="bg-primary">
            <Routes>
                <Route path={'/about'} element={<About/>}></Route>
                <Route path={'/library'} element={<Library/>}></Route>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/article/:id'} element={<Article/>}></Route>
                <Route path={'/search'} element={<Search/>}></Route>
            </Routes>
          </div>
          <Footer/>
      </div>

  );
}

export default App;
