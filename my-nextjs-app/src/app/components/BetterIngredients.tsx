import React from "react";

const BetterIngredients = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/image/info2.png",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/image/info1.png",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/image/info1.png",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/image/info2.png",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/image/info1.png",
    },
  ];

  return (
    <div className="p-10 bg-[#F6FBFE]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className=" p-6 rounded-lg col-span-1 lg:col-span-1">
          <p className="font-semibold text-sm text-gray-500 uppercase">
            Ingredients
          </p>
          <h2 className="text-3xl font-bold text-[#0F3B4C] mt-2">
            Better Ingredients
          </h2>
          <p className="text-gray-600 mt-4">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>

        {ingredients.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col bg-cover bg-no-repeat bg-right-bottom "
            style={{backgroundImage: `url(${item.image})`}}
          >
            <h3 className="text-xl font-semibold text-[#0F3B4C] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>

            <a
              href="#"
              className="text-sm font-semibold text-[#0F3B4C] hover:underline"
            >
              SEE MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetterIngredients;
