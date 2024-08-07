import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import { useState } from 'react';

function App() {
   const [statedisplay, setStatedisplay] = useState('none');

   return (
      <div className="App">
         <div className="container">
            <Header setStatedisplay={setStatedisplay} />
            <Routes>
               <Route
                  path="/"
                  element={<Main statedisplay={statedisplay} setStatedisplay={setStatedisplay} />}
               />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
         </div>
      </div>
   );
}

function AppWrapper() {
   return (
      <Router>
         <App />
      </Router>
   );
}

export default AppWrapper;
