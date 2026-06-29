import React from 'react'
import hero1 from "../../assets/image/hero_1.svg";
import hero2 from "../../assets/image/hero_2.svg";
import hero3 from "../../assets/image/hero_3.svg";
import hero4 from "../../assets/image/hero_4.svg";
import hero5 from "../../assets/image/hero_5.png";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
      <div className="relative z-10 w-[92%] max-w-7xl h-[85vh] rounded-[40px] bg-white/20 backdrop-blur-xl flex items-center justify-between px-10 md:px-20 overflow-hidden">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-black">
            ВКУСНАЯ <br />
            ЕДА ЖДЕТ <br />
            ТЕБЯ!
          </h1>
          <button className="mt-10 bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-amber-600 duration-300">
            Посмотреть меню
            <span>➜</span>
          </button>
        </div>
        <div className="relative hidden md:flex items-center justify-center w-[600px] h-[600px]">
            <img src={hero5} alt="Food" className="w-[520px] relative z-20 drop-shadow-[0_35px_45px_rgba(0,0,0,0.35)]"/>
            <img src={hero1} alt="" className="absolute top-2 left-8 w-28 z-30 animate-float"/>
            <img src={hero2} alt="" className="absolute top-44 -left-8 w-24 z-30 animate-float"/>
            <img src={hero3} alt="" className="absolute bottom-6 left-12 w-28 z-30 animate-float"/>
            <img src={hero4}  alt="" className="absolute right-0 bottom-32 w-24 z-30 animate-float"/>
        </div>
      </div>
    </section>
  );
}

export default Hero
