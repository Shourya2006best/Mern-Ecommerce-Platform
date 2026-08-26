import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../src/App";
import { toast } from "react-toastify";
import { assets } from "../src/assets/assets";
import api from "../api/api.js";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await api.post("/order/list", {});
      if (response.data.success) {
        
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  
  const statusHandler = async (e, orderId) => {
    try {
      const response = await api.post("/order/status", {
        orderId,
        status: e.target.value,
      });
      if (response.data.success) {
        toast.success("Order status updated smoothly!");
        await fetchAllOrders(); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">All Customer Orders</h3>
      <div>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500 py-12 text-sm uppercase tracking-widest bg-white border rounded border-gray-200 shadow-sm">
            No orders recorded in database yet
          </p>
        ) : (
          orders.map((order, index) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 bg-white rounded shadow-sm"
              key={index}
            >
             
              <img
                className="w-12 opacity-80"
                src={assets.parcel_icon}
                alt="Parcel Icon"
              />

              <div>
                <div className="bg-slate-50 p-3 rounded border border-gray-100 max-w-md">
                  {order.items.map((item, idx) => (
                    <p className="py-0.5 text-gray-800 font-medium" key={idx}>
                      • {item.name}{" "}
                      <span className="text-xs text-gray-500 font-mono bg-white border px-1 ml-1 rounded">
                        {item.size}
                      </span>{" "}
                      <span className="text-blue-600 ml-1">
                        x{item.quantity}
                      </span>
                    </p>
                  ))}
                </div>

                <p className="mt-4 mb-1 font-semibold text-sm text-gray-900">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="text-gray-500 leading-relaxed text-xs sm:text-sm">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country} - {order.address.zipcode}
                  </p>
                </div>
                <p className="mt-2 text-gray-600 font-mono text-xs font-semibold">
                  Phone: {order.address.phone}
                </p>
              </div>

             
              <div className="flex flex-col gap-1 text-gray-600 text-xs sm:text-sm">
                <p className="font-medium text-gray-800">
                  Total Items: {order.items.length}
                </p>
                <p className="mt-2">
                  Method:{" "}
                  <span className="uppercase font-semibold text-gray-700">
                    {order.paymentMethod}
                  </span>
                </p>
                <p>
                  Payment:{" "}
                  {order.payment ? (
                    <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 border border-green-200 rounded text-xs">
                      Done
                    </span>
                  ) : (
                    <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 border border-orange-200 rounded text-xs">
                      Pending
                    </span>
                  )}
                </p>
                <p className="mt-1 text-gray-400 font-medium">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

            
              <p className="text-sm sm:text-lg font-bold text-gray-900 sm:text-left lg:text-center pt-1">
                {currency}
                {order.amount}
              </p>

             
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="p-2 font-semibold bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm outline-none focus:border-black cursor-pointer"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
