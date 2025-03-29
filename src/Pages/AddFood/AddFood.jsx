import React from 'react';

const AddFood = () => {

    const handleSubmit = () =>{

    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Add New Food</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="foodName" placeholder="Food Name"   className="w-full p-2 border rounded" required />
            <input type="text" name="foodImage" placeholder="Food Image URL"   className="w-full p-2 border rounded" required />
            <input type="text" name="foodCategory" placeholder="Food Category"   className="w-full p-2 border rounded" required />
            <input type="number" name="quantity" placeholder="Quantity"  className="w-full p-2 border rounded" required />
            <input type="number" name="price" placeholder="Price"  className="w-full p-2 border rounded" required />
            <input type="text" name="foodOrigin" placeholder="Food Origin (Country)"  className="w-full p-2 border rounded" required />
            <textarea name="description" placeholder="Short Description (Ingredients, Making Procedure, etc.)"   className="w-full p-2 border rounded h-24" required />
            <p className="text-gray-600 dark:text-gray-300">Added by: </p>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Add Item</button>
          </form>
        </div>
      </div>
    );
};

export default AddFood;