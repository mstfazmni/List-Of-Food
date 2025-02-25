import React, {useState} from 'react';

function FoodList(){
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])


    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleDeleteFood(index) {
        setFoods(foods.filter((_,i)=> i !== index));
    }

    return(
        <div className='food-container'>
            <h1>List of Food</h1>
            <div className="list-container">
            <ul>
                {foods.map((food, index) => 
                <li key={index}>
                    {food} 
                    <button className="delete-btn" onClick={() => handleDeleteFood(index)}>Delete</button>
                </li>)}
            </ul>
            </div>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button className="add-btn" onClick={handleAddFood}>Add Food</button>
        </div>
    );
}
export default FoodList;