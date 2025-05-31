import React from 'react'
import photo from './../../img/Frame 430.png';
import arrow from './../../img/arrow-narrow-right.png';
function Dlya() {
    return (
        <>
            <div className="max-w-[1312px] mx-auto">
                <div className="">
                    <h1 className='text-2xl font-bold pt-[50px]'>Для розничных магазинов и ресторанов</h1>
                    <div className="flex items-center justify-between mx-auto pt-[50px]">
                        <img src={photo} alt="" />
                        <div className="">
                            <div className="w-[636px] h-[308px]">
                                <div className="w-[556px]">
                                    <h1 className='text-2xl pt-[10px]'>Получайте рекомендации по управлению ассортиментом</h1>
                                    <h1 className='text-[#6F7973] pt-[10px]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</h1>
                                    <h1 className='text-[#6F7973]'>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</h1>
                                    <h1 className='text-[#6F7973]'>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</h1>
                                    <h1 className='text-[#6F7973]'>какие товары у вас в избытке, а какие следует отнести к неликвидам;</h1>
                                </div>
                                <div className="flex items-center gap-[3px] pt-[10px]">
                                    <button className='text-[#327F36]'>Подробнее о 1С-Ритейл Чекер</button>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                            <div className="w-[636px] h-[288px]">
                                <div className="w-[556px]">
                                    <h1 className='text-2xl'>Прогнозируйте спрос и управляйте запасами</h1>
                                    <h1 className='text-[#6F7973]'>Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи, тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи, акции.
                                        Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков товара в магазине.</h1>
                                </div>
                                <div className="flex items-center gap-[3px] pt-[10px]">
                                    <button className='text-[#327F36]'>Подробнее о 1С-Ритейл Чекер</button>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                            <div className="w-[636px] h-[188px]">
                                <div className="w-[556px]">
                                    <h1 className='text-2xl'>Планируйте ассортимент без ошибок</h1>
                                    <h1 className='text-[#6F7973]'>Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте.
                                        И, наоборот, выводите из ассортимента товары с низкой наценкой и оборачиваемостью.</h1>
                                </div>
                            </div>
                            <div className="w-[636px] h-[248px]">
                                <div className="w-[556px]">
                                    <h1 className='text-2xl'>Контролируйте бизнес и повышайте прибыль</h1>
                                    <h1 className='text-[#6F7973]'>Для этого используйте блок аналитики.</h1>
                                    <h1 className='text-[#6F7973]'>Пробуйте разные варианты повышения продаж – новые товары, изменение наценки, перераспределение площади. Убедиться в правильности действий помогут отчеты.
                                        Блок аналитики доступен через Интернет и сделан как приборная панель индикаторов деятельности, что позволяет быстро заметить изменения.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dlya