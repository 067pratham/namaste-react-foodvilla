const RestaurantCard=({name,areaName,avgRating,cloudinaryImageId})=>{
    return(
        <div className="w-52 p-2 m-2 border-2 h-[380px] border-black rounded-md shadow-xl">
            <img className="border-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h2 className="font-bold text-xl my-2">{name}</h2>
            <h3>{areaName}</h3>
            <h4>{avgRating} Star</h4>
        </div>
    )
}
export default RestaurantCard;