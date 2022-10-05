import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import Library from "./pages/Library";
import Article from "./pages/Article";
import Search from "./pages/Search";
import {useTheme} from "./hooks/useTheme";
import {useEffect, useRef} from "react";

function App() {

    const { mode, size } = useTheme()


    const sizes = useRef(['smaller', 'small', 'normal', 'big', 'bigger'])

    useEffect(() => {
        if (sizes[size] === 'smaller'){
            document.documentElement.style.fontSize = '70%'
        }else if (sizes[size] === 'small'){
            document.documentElement.style.fontSize = '90%'
        }else if (sizes[size] === 'normal'){
            document.documentElement.style.fontSize = '100%'
        }else if (sizes[size] === 'big'){
            document.documentElement.style.fontSize = '120%'
        }else {
            document.documentElement.style.fontSize = '140%'
        }
    }, [size, sizes])



    return (
      <div className={`app ${mode} ${sizes[size]}`}>
        <Navbar/>
        <Routes>
            <Route path={'/about'} element={<About/>}></Route>
            <Route path={'/library'} element={<Library/>}></Route>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/article/:id'} element={<Article/>}></Route>
            <Route path={'/search'} element={<Search/>}></Route>
        </Routes>
        <Footer/>
      </div>

    );
}

export default App;
