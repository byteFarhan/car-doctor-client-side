import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { _id, price, title, img } = service;
  return (
    <>
      <div className="p-5 space-y-5 rounded-md shadow card">
        <figure className="">
          <img
            src={img}
            alt={title}
            className="rounded-md h-[250px] object-cover"
          />
        </figure>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center justify-between text-[#FF3811]">
            <p className="text-xl font-medium">Price: ${price}</p>
            <Link to={`/bookservice/${_id}`}>
              <AiOutlineArrowRight className="text-3xl font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
