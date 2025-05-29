import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import swiper_img1 from './../../assets/img/section8_swiper_img1.png';
import swiper_img2 from './../../assets/img/section8_swiper_img2.png';
import swiper_img3 from './../../assets/img/section8_swiper_img3.png';
const articles = [
  {
    title: 'Методы и формулы расчета торговой наценки',
    image: swiper_img1,
    link: '#',
  },
  {
    title: 'Ассортимент продуктового ассортимента',
    image: swiper_img2,
    link: '#',
  },
  {
    title: 'Что такое сезонность продаж',
    image: swiper_img3,
    link: '#',
  },
  {
    title: 'Методы и формулы расчета торговой наценки',
    image: swiper_img1,
    link: '#',
  },
  {
    title: 'Ассортимент продуктового ассортимента',
    image: swiper_img2,
    link: '#',
  },
  {
    title: 'Что такое сезонность продаж',
    image: swiper_img3,
    link: '#',
  },
  {
    title: 'Методы и формулы расчета торговой наценки',
    image: swiper_img1,
    link: '#',
  },
  {
    title: 'Ассортимент продуктового ассортимента',
    image: swiper_img2,
    link: '#',
  },
  {
    title: 'Что такое сезонность продаж',
    image: swiper_img3,
    link: '#',
  },
];

const SectionEight = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">База знаний</h2>
        <button className="text-sm text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-full">
          Все статьи
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-6"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-medium mb-2">{article.title}</h3>
                <a
                  href={article.link}
                  className="text-green-500 text-sm font-semibold hover:underline"
                >
                  Читать статью
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Кастомные кнопки навигации */}
        <div className="prev-btn absolute top-[50%] left-0 transform -translate-y-1/2 z-10 p-2 cursor-pointer">
          <FiChevronLeft size={24} />
        </div>
        <div className="next-btn absolute top-[50%] right-0 transform -translate-y-1/2 z-10 p-2 cursor-pointer">
          <FiChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default SectionEight;
