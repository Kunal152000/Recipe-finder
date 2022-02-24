import React, { useState, useCallback, useContext } from "react";
import "./HomePage.css";
import { myContext } from "../Context/Context";
const HomePage = () => {
  const [searchMeal, setSearchMeal] = useState("");

  const { fetchHomePageMeals, meals,loading,loader } = useContext(myContext);
console.log(loading);
  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchMeal);
  }, [searchMeal, fetchHomePageMeals]);
  return (
    <div className="home">
      <div className="home-search">
        <input    
          type="text"
          placeholder="Type a meal name..."
          value={searchMeal}
          onChange={(e) => setSearchMeal(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
        {
          loader===true&&<div class="lds-dual-ring"></div>
        }
      {
        loading===true&&
           <div className="content">Welcome to Meals App!</div>
      }
      

      <div className="home-grid">
        {meals ? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
