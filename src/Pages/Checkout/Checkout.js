import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../Title/useTitle";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  useTitle("Customer Details");
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstName.value + form.lastName.value;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    console.log("order before req",order);

    fetch("http://127.0.0.1:5001/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <form
        className="w-[32%] p-[50px] border-4 shadow-lg mx-auto"
        onSubmit={handlePlaceOrder}
      >
        <h2 className="text-xl my-[10px] font-bold">
          You've ordered: <span className="text-[#FF3811]">{title}</span>
        </h2>
        <h4 className="text-xl font-bold">
          Price: <span className="text-[#4407CB]">{price}</span>
        </h4>
        <div className="mt-[20px]">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full mb-[20px]  input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full mb-[20px]  input-bordered"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full mb-[20px] input-bordered"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full mb-[20px] input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea bg-gray-200 textarea-bordered h-24 w-full mb-4"
          placeholder="Your Message"
          required
        ></textarea>

        <input
          className="bg-[#4407CB] text-white py-[10px] rounded-lg w-[100%] mb-4"
          type="submit"
          value="Checkout"
        />
      </form>
    </div>
  );
};

export default Checkout;
