import PropTypes from "prop-types";
const SlideIcon = ({ rightIconPath, leftIconPath }) => {
  return (
    <div>
      <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
        <a
          href={leftIconPath}
          className="text-white bg-red-500 border-none btn btn-circle hover:text-black"
        >
          ❮
        </a>
        <a
          href={rightIconPath}
          className="text-white bg-red-500 border-none btn btn-circle hover:text-black"
        >
          ❯
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
