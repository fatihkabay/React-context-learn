import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';


function App() {
  
  const [title, setTitle] = useState("Use of context");
  
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
