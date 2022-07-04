import './App.css';
import Header from './Pages/Common/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Footer from './Pages/Common/Footer/Footer';
import SignIn from './Pages/Common/SignIn/SignIn';
import SignUp from './Pages/Common/SignUp/SignUp';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
