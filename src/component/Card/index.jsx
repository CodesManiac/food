import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import ReactStars from "react-rating-stars-component";
import AddItem from '../../assets/plus.svg';
import { SpringSpinner} from 'react-epic-spinners';
import swal from 'sweetalert';

const ratingChanged = (newRating) => {
  console.log(newRating);
};


const Card = () => {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData= ()=>{
    setIsLoading(true)
    axios.get(`https://asm-dev-api.herokuapp.com/api/v1/food`).then((res) => {
        const response = res.data.data.meals;
        setFood(response);
        setIsLoading(false);
       
      }).catch((err)=>{
        setIsLoading(false);
        swal({
          title: "Ooops!...Something went wrong",
          text: "Click the button to reload!",
          icon: "error",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
           fetchData();
          } 
        });
      })
  }

  useEffect(() => {
    fetchData()
  }, []);
  // console.log(food);

  return (
    <div>
      {isLoading ?
      <div className='spinner'>
        <SpringSpinner color="#fa9e0d"/>
      </div>
      :
      <>
      <div className="cards-list">
      {food.map((data) => (
        <div className="card">
          <img src={data.strMealThumb} alt={data.title} className='thumbnail'/> 
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
            <div className="add-item">
              <img src={AddItem} alt='Add item icon'/>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className='learn-more'>
    <button onClick={fetchData}>Learn More</button>
    </div>
    </>
      }
     
    </div>
  );
};

export default Card;
