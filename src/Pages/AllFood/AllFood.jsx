import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AllFood = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setFoods(data))

  }, []);

  // Filter foods based on search
  const filteredFoods = foods.filter((food) =>
    food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/*  Title Section */}
      <div className="relative bg-cover bg-center h-60 flex items-center justify-center" style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
        <h1 className="text-4xl font-bold text-white bg-green-500 bg-opacity-50 px-6 py-3 rounded-xl">All Foods</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search food..."
            className="w-full p-3 pl-10 border rounded-lg shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Food Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food._id} className="card bg-white shadow-xl rounded-lg overflow-hidden">
              <img src={food.foodImage} alt={food.foodName} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{food.foodName}</h2>
                <p className="text-gray-600">Category: {food.foodCategory}</p>
                <p className="text-gray-700 font-semibold">Quantity: {food.quantity}</p>
                <p className="text-green-600 font-bold">
                  ${parseFloat(food?.price || 0).toFixed(2)}
                </p>
                <Link to={`/singleFood/${food._id}`}>
                  <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No foods found.</p>
        )}
      </div>
    </div>
  );
};

export default AllFood;
