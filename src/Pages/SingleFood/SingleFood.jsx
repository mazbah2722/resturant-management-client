import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleFood = () => {
  const {_id,foodName,foodImage,quantity,price,description} = useLoaderData();

  return (
    <div className='p-10 bg-gray-100 my-10 rounded-2xl'>
      <img className='w-[250px] h-[200px] rounded-2xl' src={foodImage} alt="" />
      <h1 className='text-3xl font-bold mt-4'>Food Name : {foodName}</h1>
      <p className='text-lg font-semibold mt-2'>Quantity: {quantity}</p>
      <p className='text-lg font-semibold mt-2'>Price: {price} $</p>
      <p className='text-lg font-semibold mt-2'>Ingredients: {description.ingredients}</p>
      <p className='text-lg font-semibold mt-2'>MakingProcedure: {description.makingProcedure}</p>
   
      <Link to={`/purchaseFood/${_id}`}>
        <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
          Purchase
        </button>
      </Link>
    </div>
  );
};

export default SingleFood;