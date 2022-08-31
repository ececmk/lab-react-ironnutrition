import FoodCard from "./Components/FoodCard";
import foods from './foods.json';
import { useState } from "react"
import { v4 as uuid } from "uuid"


function FoodList(props){



    //function to submit
    const [name, setName] = useState(" ")
    const [image, setImage] = useState(" ")
    const [calories, setCalories] = useState(" ")
    const [servings, setServings] = useState(" ")
    const [foodList, setFoodList] = useState(foods)

    const handleNameInput = (event) => setName(event.target.value)
    const handleImageInput = (event) => setImage(event.target.value)
    const handleCaloriesInput = (event) => setCalories(event.target.value)
    const handleServingsInput = (event) => setServings(event.target.value)

    const submit = (e) => {
        e.preventDefault()

        const key = uuid()
        const foodsArray = [...foods]
        const newFood = {key, name, image, calories, servings}
        console.log("newFood", newFood)
        foodsArray.push(newFood)
        setFoodList(foodsArray)
}


    return (
        <div>
        <form onSubmit={submit}>
        <label>Name:</label>
        <input type="text" name="foodName" value={name} onChange={handleNameInput}/>
        <label>Image:</label>
        <input type="url" name="foodImage" value={image} onChange={handleImageInput}/>
        <label>Calories:</label>
        <input type="text" name ="foodCalories" value={calories} onChange={handleCaloriesInput}/>
        <label>Servings:</label>
        <input type="text" name="foodServings" value={servings} onChange={handleServingsInput}/> 
        <button type="submit">Share food!</button></form>
        {foods.map(food => <FoodCard key={uuid()} name={food.name} image={food.image} calories={food.calories} servings={food.servings} />)}
        </div>
        )}



     


export default FoodList;