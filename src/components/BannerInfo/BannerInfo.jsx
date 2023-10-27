import PropTypes from "prop-types";
const BannerInfo = ({ title, description, buttonLeft, buttonRight }) => {
  return (
    <>
      <div className="absolute flex w-1/2 items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="w-2/3 text-white space-y-7">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-xl text-white">{description}</p>
          <div className="flex gap-5">
            <button className="btn btn-warning">{buttonLeft}</button>
            <button className="btn btn-outline btn-info">{buttonRight}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerInfo;
BannerInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLeft: PropTypes.string.isRequired,
  buttonRight: PropTypes.string.isRequired,
};
