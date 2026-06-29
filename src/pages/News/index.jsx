import React from "react";
import Header from "../../comonents/header";
import news1 from "../../assets/image/news_1.png"
import news2 from "../../assets/image/news_2.png"
import news3 from "../../assets/image/news_3.png"

const newsData = [
  {
    id: 1,
    title: "Новое сезонное меню",
    date: "15.06.2026",
    image: news1,
  },
  {
    id: 2,
    title: "Скидка 20% на все блюда",
    date: "12.06.2026",
    image: news2,
  },
  {
    id: 3,
    title: "Открытие нового филиала",
    date: "10.06.2026",
    image: news3,
  },
  {
    id: 4,
    title: "Новинки от шеф-повара",
    date: "08.06.2026",
    image: news1,
  },
  {
    id: 5,
    title: "Летние акции",
    date: "05.06.2026",
    image: news2,
  },
  {
    id: 6,
    title: "Обновление интерьера",
    date: "01.06.2026",
    image: news3,
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${body})` }}>
      <Header />
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="mb-10">
          <p className="text-gray-500">
            Главная / <span className="text-red-500">Новости</span>
          </p>
          <h1 className="text-5xl font-bold mt-4">Новости</h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover"/>
              <div className="p-5">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-xl font-semibold mt-2">
                  {item.title}
                </h3>
                <button className="mt-4 bg-black text-white px-5 py-2 rounded-xl hover:bg-red-500 duration-300">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-14">
          <button className="w-10 h-10 rounded-full bg-red-500 text-white">1</button>
          <button className="w-10 h-10 rounded-full border">2</button>
          <button className="w-10 h-10 rounded-full border">3</button>
          <button className="w-10 h-10 rounded-full border">4</button>
        </div>
      </div>
    </div>
  );
};

export default News;