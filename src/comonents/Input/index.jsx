
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import input1 from "../../assets/image/input_1.png";
import input2 from "../../assets/image/input_2.svg";

const Input = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
      <div className="relative z-10 max-w-7xl w-full px-10 flex items-center justify-between">
        <div className="w-[380px] bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-4xl mx-auto -mt-16 mb-8">
            🍴
          </div>
          <h2 className="text-3xl font-bold mb-10">
            Забронировать стол
          </h2>
          <div className="mb-7">
            <input type="text" placeholder="Ваш номер" className="w-full bg-transparent border-b border-black outline-none pb-2"/>
          </div>
          <div className="mb-7 relative">
            <select className="w-full bg-transparent border-b border-black outline-none pb-2 appearance-none">
              <option>На сколько человек?</option>
              <option>2 человека</option>
              <option>4 человека</option>
              <option>6 человек</option>
            </select>
            <IoChevronDown className="absolute right-0 top-1" />
          </div>
          <div className="mb-7 relative">
            <input type="date" className="w-full bg-transparent border-b border-black outline-none pb-2"/>
            <FaCalendarAlt className="absolute right-0 top-1" />
          </div>
          <div className="mb-7 relative">
            <input type="time" className="w-full bg-transparent border-b border-black outline-none pb-2"/>
            <FaClock className="absolute right-0 top-1" />
          </div>
          <div className="mb-2 relative">
            <select className="w-full bg-transparent border-b border-black outline-none pb-2 appearance-none">
              <option>Выберите место</option>
              <option>Зал</option>
              <option>VIP</option>
            </select>
            <IoChevronDown className="absolute right-0 top-1" />
          </div>
          <div className=" flex items-center gap-2">
            <button className="text-xs hover:text-blue-700 hover:underline mb-8">
              Выбрать место на карте
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-amber-600 transition">
              Забронировать
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img src={input1} alt="pizza" className="w-[650px] drop-shadow-2xl"/>
          <img src={input2} alt="" className="absolute -top-5 left-16 w-16 animate-bounce"/>
          <img src={input2} alt="" className="absolute bottom-16 -left-10 w-20"/>
        </div>
      </div>
    </div>
  );
};

export default Input;