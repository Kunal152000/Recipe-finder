import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const myContext = createContext();
export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const fetchHomePageMeals = useCallback((searchMeal) => {
    setLoading(false);
    setLoader(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
      .then((res) => {
        setLoading(false);
        setMeals(res.data.meals);
        setLoader(false);
      })
      .catch((e) => {
        setLoading(false);
        setLoader(false);
        console.log(e);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    setLoader(true);

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
        setLoader(false);
      });
  }, []);
  const fetchRandomMeal = useCallback(() => {
    setLoader(true);

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        setRandomMeal(res.data.meals);
        setLoader(false);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchCategories,
        categories,
        fetchRandomMeal,
        randomMeal,
        loading,
        loader,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
