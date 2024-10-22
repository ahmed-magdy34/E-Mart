import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons

const StaticStarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value}>
          {value <= rating ? (
            <FaStar className="text-[#FFDD00] text-lg" /> // Filled star for the rating
          ) : (
            <FaRegStar className="text-gray-400 text-lg" /> // Outlined star for the remaining stars
          )}
        </span>
      ))}
    </div>
  );
};

export default StaticStarRating;
