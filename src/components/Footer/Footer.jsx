import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='w-[100%] h-[390px]  pt-[40px] pl-[100px] bg-[#2C2B35]'>
        <div className='flex gap-[20px] mb-[40px]'>
            <div>
                    <div className='flex gap-[10px] items-center mb-[40px]'><div className='w-[40px] h-[40px] rounded-[50%] bg-green-500'></div><h1 className='font-bold text-white'>1С-Товары</h1></div>
                    <div className='flex gap-[40px] items-center w-[646px] h-[46px] mb-[40px]'>
                        <ul>
                            <li className='text-[#919999] text-[18px]'>Линия консультации</li>
                            <li className='text-white text-[24px]'>+7(495)-111-00-10</li>
                        </ul>
                        <ul>
                            <li className='text-[#919999] text-[18px]'>Наш e-mail</li>
                            <li className='text-[#43A548] text-[24px]'>info@rozn.info</li>
                        </ul>
                        <button className='w-[185px] h-[46px] rounded-[1000px] bg-[linear-gradient(100.98deg,_#43A548_-4.14%,_#52E259_108.69%)] text-white font-[600]'>Заказать звонок</button>
                    </div>

                    <div>
                        <p className='text-[#FFFFFF] mb-[20px]'>Для активации перейдите на <span className='text-[#43A548]'>portal.1c.ru</span> или обратитесь к Вашему партнеру 1С.</p>
                        <p className='text-[#FFFFFF] '>Инструкция по установке сервиса</p>
                    </div>
            </div>

            <div className='w-[646px] h-[250px] flex gap-[174px]'>
                <ul className='font-[400px] text-white'>
                    <li className='mb-[32px] text-[20px] font-bold'>Информация</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>Как это работает</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>Инструкции</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>Блог</li>
                    <li className=' text-[16px] hover:text-[#43A548]'>О нас</li>
                </ul>
                <ul className='font-[400px] text-white'>
                    <li className='mb-[32px] text-[20px] font-bold'>Продукты</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>1С-Ритейл Чекер Демо</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>1С-Товары.Тестовый для магазина на 1 месяц</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>1С-Ритейл Чекер</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>1С-Товары 300</li>
                    <li className='mb-[11px] text-[16px] hover:text-[#43A548]'>1С-Товары 30000</li>
                </ul>
            </div>
        </div>
        <div className='border-t-1 border-[#494949] flex justify-between  items-end text-white h-[40px]'>
            <h2>1С-Товары © 2023</h2>
            <h2>Сайт создан - BKDR Oktab RGolova</h2>
        </div>  
      </footer>
    </>
  )
}

export default Footer
