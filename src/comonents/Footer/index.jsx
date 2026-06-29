import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import logo from "../../assets/image/logo.svg"
const Footer = () => {
  return (
    <footer className="relative w-full bg-cover bg-center">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="" />
          <div className="flex gap-3 text-xl pt-3">
            <BsTelegram className="cursor-pointer hover:text-blue-500" />
            <FaWhatsapp className="cursor-pointer hover:text-green-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Наши услуги</h2>
          <ul className="space-y-2 text-gray-800">
            <li><a href="#" className=" hover:text-amber-600">Цены</a></li>
            <li><a href="#" className=" hover:text-amber-600">Отслеживание</a></li>
            <li><a href="#" className=" hover:text-amber-600">Сообщить об ошибке</a></li>
            <li><a href="#" className=" hover:text-amber-600">Условия услуг</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Наша компания</h2>
          <ul className="space-y-2 text-gray-800">
            <li><a href="#" className=" hover:text-amber-600">Отчетность</a></li>
            <li><a href="#" className=" hover:text-amber-600">Свяжитесь с нами</a></li>
            <li><a href="#" className=" hover:text-amber-600">Управление</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Адрес</h2>
          <div className="space-y-2 text-gray-800">
            <li><a href="#" className=" hover:text-amber-600">Узбекистан, Ташкент</a></li>
            <li><a href="#" className=" hover:text-amber-600">Улица, 24</a></li>
            <li><a href="#" className=" hover:text-amber-600">+998 94 848 44 84</a></li>
            <li><a href="#" className=" hover:text-amber-600">info@bmgsoft.com</a></li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;