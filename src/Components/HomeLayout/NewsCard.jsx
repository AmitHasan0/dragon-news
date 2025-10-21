// NewsCard.jsx
import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const {
    title,
    author,

    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;
  const [showFull, setShowFull] = useState(false);
  const toggleText = () => setShowFull(!showFull);

  const shouldShowToggle = details.length > 150;
  const displayedText = showFull ? details : details.slice(0, 150);

  return (
    <div className="card bg-base-100 shadow-sm  rounded-md ">
      <div className="flex items-center bg-base-200 justify-between p-4 border-b">
        {/* Author info */}
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "MMMM d, yyyy")}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </figure>

      {/* Description with See More */}
      <div className="p-4 text-sm text-gray-700">
        <p>
          {displayedText}
          {shouldShowToggle && !showFull && "... "}
          {shouldShowToggle && (
            <button
              onClick={toggleText}
              className="text-blue-500 ml-1 hover:underline"
            >
              {showFull ? "See less" : "See more"}
            </button>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center text-orange-400 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="text-sm text-gray-500">👁️ {total_view}</div>
      </div>
    </div>
  );
};

export default NewsCard;
