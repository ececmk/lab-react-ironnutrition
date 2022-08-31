function FoodCard({ name, image, calories, servings }){
    
    return (
        <div className='food-card'>
            <h1>{name}</h1>
            <img src={image} width="100px"  height="120px" alt="food_picture" />
            <p>{calories} calories</p>
            <p>Servings: {servings}</p>
            
        </div>
    )
}

export default FoodCard;