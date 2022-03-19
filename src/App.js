import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProducts from './components/allProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";



function App() {
  const [count, setCount] = useState(0)
  const addToCard = () => {
      setCount(count+1)
  }
 
// this is aos animation for react======
useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts addToCard={addToCard}></AllProducts>
    </div>
  );
}

export default App;
