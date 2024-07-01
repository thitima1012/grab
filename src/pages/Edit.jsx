import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({
      title: "",
      type: "",
      img: "",
    });
    useEffect(()=>{
        fetch("http://localhost:3000/restaurants/"+id)
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            setRestaurant(response);
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[id])
    const handleChan = (e) => {
      const { name, value } = e.target;
      setRestaurant({ ...restaurant, [name]: value });
    };
    const handSubmit = async ()=>{
    try{
        //TODO
        if(reponse.ok){
            //TODO
         }
        }catch (error) {
            console.log (error);
        }
    };
    return (
      <div className="contaner mx-auto">
        <div>
          <h1 className="text-2xl text-center">Edit Restaurant</h1>
        </div>
        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            Restaurant Name
            <input
              type="text"
              className="grow"
              placeholder="Restaurant Name"
              name="title"
              onChange={handleChange}
              value={restaurant.title}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Restaurant type
            <input
              type="text"
              className="grow"
              placeholder="Restaurant Type"
              name="type"
              onChange={handleChange}
              value={restaurant.type}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Restaurant ImageUrl
            <input
              type="text"
              className="grow"
              placeholder="Restaurant ImageUrl"
              name="img"
              onChange={handleChange}
              value={restaurant.img}
            />
          </label>
          {restaurant.img && (
            <div className="flex items-center gap-2">
              <img src="restaurant.img" 
              className="h-32" />
            </div>
          )}
          <button className="btn btn-success" onClick={handSubmit}>
            Edit restaurant
          </button>
        </div>
      </div>
    );
};

export default Edit;