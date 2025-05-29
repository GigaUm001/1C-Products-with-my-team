import React from 'react';

const SectionSix = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#43A548] to-[#61CE70] p-10 rounded-[30px] max-w-[1312px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Левая часть */}
        <div className="text-white max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            Хотите бесплатную консультацию?<br />
            <span className="font-bold">Оставляйте заявку</span>
          </h2>
          <p className="text-base">Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время</p>
        </div>

        {/* Правая часть */}
        <form className="w-full md:w-1/2 space-y-4">
          <div>
            <p className="text-white text-sm mb-1">Ваше имя</p>
            <input
              type="text"
              placeholder="Сергей"
              className="w-full p-3 rounded-full outline-none text-sm text-gray-800 bg-white"
            />
          </div>
          <div>
            <p className="text-white text-sm mb-1">Ваш телефон</p>
            <input
              type="text"
              placeholder="Ваш телефон"
              className="w-full p-3 rounded-full outline-none text-sm text-gray-800 bg-white"
            />
          </div>
          <div>
            <p className="text-white text-sm mb-1">Ваш e-mail</p>
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="w-full p-3 rounded-full outline-none text-sm text-gray-800 bg-white"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
            <p className="text-[10px] text-white opacity-70 max-w-xs leading-tight">
              Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности
            </p>
            <button
              type="submit"
              className="mt-4 md:mt-0 bg-white text-[#43A548] font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionSix;
