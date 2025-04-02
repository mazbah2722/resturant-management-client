import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";


const MyOrder = () => {
    const {user} = UseAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/myFoodOrder?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user.email])
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                orders.map((order, idx) => <tr key={order._id}  className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{order.foodName}</td>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.email}</td>
                  </tr>)
            }
           
           
          </tbody>
        </table>
      </div>
    );
};

export default MyOrder;