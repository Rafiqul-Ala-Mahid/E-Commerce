import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, phone, customer, price, service, status } = order;
  const [orderServices, setOrderServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderServices(data);
      });
  }, [service]);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderServices?.img && (
                <img
                  src={orderServices.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Indigo</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;