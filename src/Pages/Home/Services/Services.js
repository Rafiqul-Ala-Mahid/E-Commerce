import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-[80%] mt-[100px] mx-auto">
      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-orange-600">Services</p>
        <h2 className="text-3xl my-[20px] font-semibold">Our Service Area</h2>
        <p className="text-xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
