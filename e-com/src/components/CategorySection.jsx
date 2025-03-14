import React from "react";
import Men from "../assets/images/men.jpg";
import Women from "../assets/images/women.jpg";
import Kids from "../assets/images/kids.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: Men,
  },
  {
    title: "Women",
    imageUrl: Women,
  },
  {
    title: "Kids",
    imageUrl: Kids,
  },
];

const CategorySection = () => {
  return (
    <div className="container   mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
      {categories.map((category, index) => (
        <div key={index} className="relative h-64 cursor-pointer shadow-sm">
          <img
            src={category.imageUrl}
            alt=""
            className="w-full h-full  rounded-lg object-cover"
          />
          <div className="">
            <p className=" text-red-600 text-xl font-bold ">
              {category.title}
              <span className="text-gray-600 text-sm ml-10 hover:underline">
                View All
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
