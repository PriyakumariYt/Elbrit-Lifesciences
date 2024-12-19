import React from "react";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      date: "20 APR",
      title: "The Covid19 Epidemic in 2022 Is Back",
      image: "/path-to-your-image-1.png",
    },
    {
      id: 2,
      date: "20 APR",
      title: "The Covid19 Epidemic in 2023 Is Back",
      image: "/path-to-your-image-2.png",
    },
    {
      id: 3,
      date: "30 APR",
      title: "The Covid19 Epidemic in 2022 Is Back",
      image: "/path-to-your-image-3.png",
    },
    {
      id: 4,
      date: "20 APR",
      title: "The Covid19 Epidemic in 2022 Is Back",
      image: "/path-to-your-image-4.png",
    },
    {
      id: 5,
      date: "17 MAR",
      title: "Has hendrerit mus non semper suspendisse",
      image: "/path-to-your-image-5.png",
    },
    {
      id: 6,
      date: "20 APR",
      title: "The Covid19 Epidemic in 2023 Is Back",
      image: "/path-to-your-image-6.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Latest News</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="relative rounded-md overflow-hidden shadow-lg"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
              {news.date}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-3">
              <p className="text-white text-sm">{news.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
