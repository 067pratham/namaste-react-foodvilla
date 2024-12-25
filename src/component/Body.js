import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterList(searchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
}

const Body=()=>{
    const [searchText,setSearchText]=useState('');
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filterRestaurants,setFilterRestaurants]=useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData() {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        const filteredRestaurant=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(filteredRestaurant);
        setAllRestaurants(filteredRestaurant);
        setFilterRestaurants(filteredRestaurant);
    }


    function noResult(){
        return  <h1>No Restaurant of your search</h1>
    }

    return allRestaurants?.length===0?<ShimmerUI/> : ( 
        <>
        <div className="p-3">
            <input className="bg-red-200 text-black border-2 border-black rounded p-1 text-left" type="text" placeholder="Search" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }
            }>
            </input>
            <button className="pl-2" onClick={()=>{
                const filteredData=filterList(searchText,allRestaurants);
                setFilterRestaurants(filteredData);
            }}>Search</button>
        </div>
        <div className="flex flex-wrap">
            {filterRestaurants?.length===0?noResult():null}
            {filterRestaurants.map((restaurant)=>{
            return <Link to={"restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}> <RestaurantCard {...restaurant.info} /> </Link>
        })}
        </div>
        </>
    )
}
export default Body;