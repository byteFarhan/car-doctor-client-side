// import { useEffect, useState } from "react";
import Service from "../Service/Service";
import useServices from "../../Hooks/useServices";

const Services = () => {
  const services = useServices();
  // console.log(services);
  // console.log(services);
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div>
      <div className="w-1/2 mx-auto my-5 space-y-4 text-center">
        <h4 className="text-xl text-[#FF3811] font-bold">Services</h4>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          {` the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 my-20 md:grid-cols-2 lg:grid-cols-3">
        {services &&
          services?.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
      </div>
    </div>
  );
};

export default Services;
