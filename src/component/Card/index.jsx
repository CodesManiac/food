import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import ReactStars from "react-rating-stars-component";
import BeefPie from "../../assets/beef-pie.jpg";
import MustardPie from "../../assets/mustard-pie.jpg";
import Brioche from "../../assets/brioche.jpg";
import Potatoes from "../../assets/potatoes.jpg";
import Rocky from "../../assets/rocky.jpg";
import Mamak from "../../assets/mamak.jpg";

const menu = [
  {
    id: 1,
    strMeal: "Fried Rice",
    strMealThumb: BeefPie,
    description: "Fried rice served with fried chicken",
    title: "Rice",
    price: "$15",
    ratings: 4,
  },
  {
    id: 2,
    strMeal: "Jollof Rice",
    strMealThumb: MustardPie,
    description: "Jollof rice served with salad",
    title: "Rice",
    price: "$10",
    ratings: 3,
  },
  {
    id: 3,
    strMeal: "Fried Rice",
    strMealThumb: Rocky,
    description: "Fried rice made with chicken",
    title: "Rice",
    price: "$5",
    ratings: 2,
  },
  {
    id: 4,
    strMeal: "Fried Rice",
    strMealThumb: Potatoes,
    description: "Fried rice made with chicken",
    title: "Rice",
    price: "$10",
    ratings: 3,
  },
  {
    id: 5,
    strMeal: "Fried Rice",
    strMealThumb: Mamak,
    description:
      "Choice of Coke,Fanta, Sprite, Upgrade to large fried, and whopper party. Add Tender crisp patty and more..",
    title: "Rice",
    price: "$11",
    ratings: 4,
  },
  {
    id: 6,
    strMeal: "Fried Rice",
    strMealThumb: Brioche,
    description: "Fried rice made with chicken",
    title: "Rice",
    price: "$12",
    ratings: 5,
  },
];

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const Card = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get(`https://asm-dev-api.herokuapp.com/api/v1/food`).then((res) => {
      const response = res.data.data.meals;
      setFood(response);
     
    });
  }, []);
  console.log(food);

  return (
    <div>
      <div className="cards-list">
        {food.map((data) => (
          <div className="card">
            <img src={data.strMealThumb} alt="Brioche meal" />
            <div className="first-row">
              <h3>{data.title}</h3>
              <h3>{data.price}</h3>
            </div>
            <div className="second-row">
              <p>{data.strMeal}</p>
              <p>{data.description}</p>
            </div>
            <div className="last-row">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                value={data.ratings}
                activeColor="#fa9e0d"
              />
              <div className="add-item">+</div>
            </div>
          </div>
        ))}
      </div>
      <div className='learn-more'>
      <button>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
