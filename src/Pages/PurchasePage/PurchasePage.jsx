import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const PurchasePage = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();


  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const userName = form.userName.value;
    const email = form.email.value;
    // console.log(foodName, price, quantity, userName, email);

    const foodOrder = {
      job_id: id,
      applicant_email: user.email,
      foodName,
      price,
      quantity, userName, email

    }

    fetch('http://localhost:5000/foodOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(foodOrder)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
               
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Purchase",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/myOrder');
        }
      })

  }
  return (
    <div className='my-10'>
      <h1 className='text-3xl my-4 p-3 font-bold bg-green-500 text-white text-center'>Food Purchase</h1>
      <form onSubmit={handlePurchase} className="space-y-4">
        <input type="text" name="foodName" placeholder="Food Name" className="w-full p-2 border rounded" required />
        <input type="text" name="price" placeholder="Price" className="w-full p-2 border rounded" required />

        <input type="number" name="quantity" placeholder="Quantity" className="w-full p-2 border rounded" required />

        <input
          name='userName'
          type="text"
          value={user?.displayName || "James"}
          className="input input-bordered w-full"
          readOnly
        />
        <input
          name='email'
          type="email"
          value={user?.email || ""}
          className="input input-bordered w-full"
          readOnly
        />


        <p className="text-gray-600 dark:text-gray-300">Added by: </p>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">Purchase</button>
      </form>
    </div>
  );
};

export default PurchasePage;