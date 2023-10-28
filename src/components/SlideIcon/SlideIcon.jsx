import PropTypes from "prop-types";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const SlideIcon = ({ rightIconPath, leftIconPath }) => {
  return (
    <div>
      <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
        <a
          href={leftIconPath}
          className="text-xl font-medium text-white bg-red-500 border-none btn btn-circle hover:text-black"
        >
          {/* ❮ */}
          <AiOutlineArrowLeft />
        </a>
        <a
          href={rightIconPath}
          className="text-xl font-medium text-white bg-red-500 border-none btn btn-circle hover:text-black"
        >
          {/* ❯ */}
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default SlideIcon;
SlideIcon.propTypes = {
  rightIconPath: PropTypes.string.isRequired,
  leftIconPath: PropTypes.string.isRequired,
};
