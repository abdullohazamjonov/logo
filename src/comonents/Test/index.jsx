import React from "react";
import test1 from "../../assets/image/news_1.png"
import test2 from "../../assets/image/news_2.png"
import test3 from "../../assets/image/news_3.png"
import test4 from "../../assets/image/news_4.png"

const cards = [
  {
    id: 1,
    image: test1,
    text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Интерактивные подходы к данным корпоративной.",
    author: "Сергей",
    avatar: test4,
  },
  {
    id: 2,
    image: test2,
    text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Интерактивные подходы к данным корпоративной.",
    author: "Сергей",
    avatar: test4,
  },
  {
    id: 3,
    image: test3,
    text: "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Интерактивные подходы к данным корпоративной.",
    author: "Сергей",
    avatar: test4,
  },
];

const Test = () => {
  return (
    <section className="py-16 bg-cover bg-center">
      <div className="bg-white/40 backdrop-blur-md py-10">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-16">
            Новости/Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {cards.map((item) => (
              <div key={item.id} className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-6 pt-20 shadow-xl">
                <img src={item.image} alt="" className="absolute -top-10 left-6 w-32 h-24 object-cover rounded-2xl shadow-lg"/>
                <p className="text-gray-700 text-sm leading-6">
                  {item.text}
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={item.avatar} alt="" className="w-10 h-10 rounded-full"/>
                  <span className="font-semibold">{item.author}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-12">
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition">
              Посмотреть все →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;