import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Clinically Studied",
      description:
        "All products that we offer have undergone lab and safety tests",
      image: "/image/4.png",
    },
    {
      title: "Vegetarian Friendly",
      description:
        "We have a wide selection of vegetarian products to meet your needs",
      image: "/image/5.png",
    },
    {
      title: "Made In India",
      description:
        "Shop local and explore health products made right here in India",
      image: "/image/6.png",
    },
    {
      title: "Free Shipping",
      description:
        "We deliver to your door with no shipping costs on your orders",
      image: "/image/7.png",
    },
    {
      title: "No Risk",
      description:
        "We ensure that all products are safe and within their use-by date",
      image: "/image/8.png",
    },
    {
      title: "GMO Free",
      description:
        "Natural, no modified products and derivatives for those who need it",
      image: "/image/9.png",
    },
  ];

  return (
    <div className="m-10 rounded-lg -mt-28">
      <div className="bg-[#0f3b4c] text-white p-8 rounded-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md ">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold">{benefit.title}</h3>

              <p className="text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
