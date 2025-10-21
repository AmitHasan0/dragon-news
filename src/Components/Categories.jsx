import React, { use } from "react";
import { NavLink } from "react-router";

const categories = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const allCategory = use(categories);

  return (
    <div>
      <h2 className="font-bold mb-5">All categories ({allCategory.length})</h2>
      <div className="grid grid-cols-1 gap-3">
        {allCategory.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn border-0 bg-base-100 hover:bg-base-200 font-semibold text-accent"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
