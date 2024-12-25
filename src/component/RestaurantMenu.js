import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ShimmerUI from "./ShimmerUI";



const RestaurantMenu=()=>{

    const param=useParams();
    const idd=param.id;
    const [restaurant,setRestaurant]=useState(null);
    
    useEffect(()=>{
        getMenu();
    },[])

     async function getMenu() {
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId="+idd);
        
        const json=await data.json();
        setRestaurant(json);
     }

    return !restaurant?<ShimmerUI/>:(
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                {(restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item)=>{
                   return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                })}
            </ul>
        </div>
    )
}
export default RestaurantMenu;