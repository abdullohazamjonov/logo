import { Heart, ShoppingCart, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import sidebar1 from "../../assets/image/sidebar_1.svg";
import sidebar2 from "../../assets/image/sidebar_2.svg";
import sidebar3 from "../../assets/image/sidebar_3.png";
import sidebar4 from "../../assets/image/sidebar_4.png";
import sidebar5 from "../../assets/image/sidebar_5.png";

const foods = [
  {
    id: 1,
    image: sidebar3,
    title: "Chicken soup",
    desc: "Spicy with garlic",
    price: "$10.00",
  },
  {
    id: 2,
    image: sidebar4,
    title: "Chicken soup",
    desc: "Spicy with garlic",
    price: "$10.00",
  },
  {
    id: 3,
    image: sidebar5,
    title: "Chicken soup",
    desc: "Spicy with garlic",
    price: "$10.00",
  },
  {
    id: 4,
    image: sidebar3,
    title: "Chicken soup",
    desc: "Spicy with garlic",
    price: "$10.00",
  },
];

function Sidebar() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <img src={sidebar1} alt="" className="absolute left-0 bottom-10 w-32 z-10"/>
      <img src={sidebar2} alt="" className="absolute right-0 top-20 w-36 z-10"/>
      <div className="relative z-20 max-w-7xl w-full px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Популярные блюда
        </h2>
        <div className="flex items-center justify-between gap-6">
          <button className="text-4xl hover:bg-amber-600">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-4 gap-10 flex-1">
            {foods.map((food) => (
              <div key={food.id} className="bg-white rounded-[35px] pt-16 pb-6 px-6 relative shadow-xl">
                <img src={food.image} alt={food.title} className="absolute -top-10 left-1/2 -translate-x-1/2 w-40"/>
                <div className="flex justify-between items-center mt-10">
                  <h3 className="font-bold text-2xl">
                    {food.title}
                  </h3>
                  <Heart size={20} />
                </div>
                <p className="text-gray-500 mt-2">
                  {food.desc}
                </p>
                <div className="flex justify-between items-center mt-8">
                  <span className="text-3xl font-bold">
                    {food.price}
                  </span>
                  <button className="bg-black text-white p-3 rounded-lg hover:bg-amber-600">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="text-4xl hover:bg-amber-600">
            <ChevronRight />
          </button>
        </div>
        <div className="flex justify-end mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-amber-600 duration-300">
            Посмотреть меню
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;