
import React from "react";

const ImageGallery = () => {
    const images = [
      {
        id: 1,
        date: "20 APR",
        title: "The Covid19 Epidemic in 2022 Is Back",
        image: "/image/blog1.png",
      },
      {
        id: 2,
        date: "30 APR",
        title: "The Covid19 Epidemic in 2022 Is Back",
        image: "/image/blog1.png",
      },
      {
        id: 3,
        date: "20 APR",
        title: "The Covid19 Epidemic in 2023 Is Back",
        image: "/image/blog1.png",
      },
      {
        id: 4,
        date: "17 MAR",
        title: "Has hendrerit mus non semper suspendisse",
        image: "/image/blog1.png",
      },
      {
        id: 5,
        date: "20 APR",
        title: "The Covid19 Epidemic in 2023 Is Back",
        image: "/image/blog2.png",
      },
      {
        id: 6,
        date: "30 APR",
        title: "The Covid19 Epidemic in 2022 Is Back",
        image: "/image/blog2.png",
      },
      {
        id: 7,
        date: "20 APR",
        title: "The Covid19 Epidemic in 2022 Is Back",
        image: "/image/blog2.png",
      },
      {
        id: 8,
        date: "17 MAR",
        title: "Has hendrerit mus non semper suspendisse",
        image: "/image/blog2.png",
      },
    ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-8">Blogs</h1>
      <h2 className="text-center text-2xl font-bold my-8">Latest News</h2>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        style={{
          gridAutoRows: "200px",
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg ${
              index % 4 === 0 ||
              index % 2 === 0 ||
              index % 3 === 2 ||
              index % 1 === 2
                ? "row-span-2"
                : "row-span-1"
            }`}
          >
           
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

            <div className="absolute top-2 -left-1 bg-[#17414F] text-white px-3 py-1 rounded-r-2xl">
              {item.date}
            </div>

            <div className="absolute top-20 left-0 w-full  bg-opacity-50 text-white p-2">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
