import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';


function App() {
  
  const [title, setTitle] = useState('Header component');

  return (
    <div className="container">
      <Header title={title}/>
      <Footer title={title} setTitle={setTitle}/>
    </div>
  );
}

export default App;
