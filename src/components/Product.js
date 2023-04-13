import Image from "next/legacy/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col  m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>

      <Image src={image} height={200} width={200} alt="" objectFit="contain"/>

      <h4 className="my-3 line-clamp-1">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 m-2 ml-0">
          <img
            className="w-9 "
            src="https://images.livemint.com/img/2022/02/12/600x338/Amazon-prime_Logo_1644660821896_1644660832832.png"
            alt=""
          />
          <p className="text-xs text-gray-500 -mt-2">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
