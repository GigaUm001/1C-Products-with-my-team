import React from 'react'
import iks from './../../img/Vector.png';
import ptichka from './../../img/Icon (8).png';
import arrow from './../../img/arrow-narrow-right.png';
function Snami() {
    return (
        <>
            <div className="max-w-[1312px] mx-auto">
                <div>
                    <h1 className='text-3xl '>С нами удобнее</h1>
                    <div className="flex items-center justify-center gap-[20px] mt-[60px]">
                        <div className="w-[646px] h-[553px] rounded-[40px] bg-gray-100">
                            <h1 className='text-center text-2xl pt-[50px]'>Без 1С-Товары</h1>

                            <h1 className='flex items-center gap-[10px] pl-[30px] pt-[50px] text-[#6F7973]'><img src={iks} alt="" />Лишний товар складируется и не продается</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Лишний товар складируется и не продается</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Лишний товар складируется и не продается</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={iks} alt="" />Лишний товар складируется и не продается</h1>
                        </div>
                        <div className="w-[646px] h-[553px] rounded-[40px] bg-[#E5F6E6]">
                            <h1 className='text-center text-2xl pt-[50px]'>Без 1С-Товары</h1>

                            <h1 className='flex items-center gap-[10px] pl-[30px] pt-[50px] text-[#6F7973]'><img src={ptichka} alt="" />Организованная система остатков</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />Рассчитанный прогноз спроса</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />Организованная система остатков</h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </h1>
                            <h1 className='flex items-center gap-[10px] pt-[15px] pl-[30px] text-[#6F7973]'><img src={ptichka} alt="" />Система контроля упущенных продаж</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#EBF5EB] mt-[120px]">
                <div className="max-w-[1312px] mx-auto">
                    <div className="flex items-center justify-between pt-[50px]">
                        <h1 className='text-3xl'>Популярные продукты</h1>
                        <button className="text-white font-semibold px-4 py-2 rounded-[1000px] bg-gradient-to-b from-[#43A548] to-[#52E259]">
                            Все продукты
                        </button>
                    </div>
                    <div className="flex items-center justify-between pt-[50px] pb-[40px]">
                        <div className="w-[424px] h-[348px] rounded-[40px] bg-white">
                            <div className="w-[344px] mx-auto h-[208px]">
                                <div className="flex items-center justify-center gap-[50px] pt-[30px]">
                                    <h1 className='text-2xl'>1С-Товары 300</h1>
                                    <button className='px-4 py-2 border-green-400 border-2 text-green-400 rounded-[1000px]'>400 руб/мес</button>
                                </div>
                                <h1 className='pt-[20px]'>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</h1>
                                <div className="flex items-center gap-[3px] pl-[100px] pt-[20px]">
                                    <button className='text-green-500 w-[96px] h-[20px] flex items-center pl-[90px]'>Подробнее</button>
                                    <img src={arrow} alt="" className='pl-[80px]' />
                                </div>
                            </div>
                        </div>
                        <div className="w-[424px] h-[348px] rounded-[40px] bg-white">
                            <div className="w-[344px] mx-auto h-[208px]">
                                <div className="flex items-center justify-center gap-[50px] pt-[30px]">
                                    <h1 className='text-2xl'>1С-Товары 300</h1>
                                    <button className='px-4 py-2 border-green-400 border-2 text-green-400 rounded-[1000px]'>400 руб/мес</button>
                                </div>
                                <h1 className='pt-[20px]'>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</h1>
                                <div className="flex items-center gap-[3px] pl-[100px] pt-[20px]">
                                    <button className='text-green-500 w-[96px] h-[20px] flex items-center pl-[90px]'>Подробнее</button>
                                    <img src={arrow} alt="" className='pl-[80px]' />
                                </div>
                            </div>
                        </div>
                        <div className="w-[424px] h-[348px] rounded-[40px] bg-white">
                            <div className="w-[344px] mx-auto h-[208px]">
                                <div className="flex items-center justify-center gap-[50px] pt-[30px]">
                                    <h1 className='text-2xl'>1С-Товары 300</h1>
                                    <button className='px-4 py-2 border-green-400 border-2 text-green-400 rounded-[1000px]'>400 руб/мес</button>
                                </div>
                                <h1 className='pt-[20px]'>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</h1>
                                <h1 className='pt-[5px]'>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</h1>
                                <div className="flex items-center gap-[3px] pl-[100px] pt-[20px]">
                                    <button className='text-green-500 w-[96px] h-[20px] flex items-center pl-[90px]'>Подробнее</button>
                                    <img src={arrow} alt="" className='pl-[80px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Snami