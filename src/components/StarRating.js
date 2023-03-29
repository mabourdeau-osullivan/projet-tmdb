import React from "react";

const Star = ({ selected }) => (
  <span>
    {selected === 0.5 ? "⭐" : selected ? "⭐" : "⭐"}
  </span>
);

const StarRating = ({rating}) => {
  let stars = [];
  for (let i = 0; i < 4; i++) {
    if (i < rating) {
      stars.push({ selected: true });
    } else {
      stars.push({ selected: false });
    }
  }
  if (rating % 1 !== 0) {
    stars[Math.floor(rating)] = { selected: 0.5 };
  }
  return (
    <div className="star">
      {stars.map((star, index) => (
        <Star key={index} selected={star.selected} />
      ))}
    </div>
  );
};

export default StarRating;