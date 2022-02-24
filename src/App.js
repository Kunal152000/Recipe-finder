import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer'; 
import Categories from './Component/Categories/Categories';
import RandomMeal from './Component/RandomMeal/RandomMeal';
import HomePage from './Component/HomePage/HomePage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/categories" element={<Categories/>}/>
        <Route exact path="/random" element={<RandomMeal/>}/>
      </Routes>
   
      <Footer />
      </Router>
    </div>
  );
}
export default App;