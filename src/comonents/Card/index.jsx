import {
  FaCar,
  FaPizzaSlice,
  FaStore,
  FaUserFriends,
} from "react-icons/fa";
import { GiChefToque, GiBowlOfRice } from "react-icons/gi";

const data = [
  {
    id: 1,
    icon: GiBowlOfRice,
    title: "Качественные продукты",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
  {
    id: 2,
    icon: FaCar,
    title: "Быстрая доставка",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
  {
    id: 3,
    icon: FaPizzaSlice,
    title: "Вкусные рецепты",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
  {
    id: 4,
    icon: FaStore,
    title: "Уютная атмосфера",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
  {
    id: 5,
    icon: GiChefToque,
    title: "Опытные повара",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
  {
    id: 6,
    icon: FaUserFriends,
    title: "Обслуживания",
    text: "Входные билеты в музей, для посещения достопримечательностей, памятников",
  },
];

const Card = () => {
  return (
    <section className="relative py-20 bg-cover bg-center">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20">
          Почему именно мы?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-16">
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id}>
                <Icon className="text-5xl mb-6" />
                <h3 className="text-3xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-6">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;