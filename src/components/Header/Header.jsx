import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import section1_img from './../../assets/img/section1_img.png';
const Header = () => {
  return (
    <>
      <header className='h-[100vh] '>
        <Nav />
        <div className='w-[100%] h-[827px] flex justify-center items-center  '>
            <div className='w-[1312px] h-[451px] flex justify-between items-center'>

                <div>
                    <h2 className='font-bold text-[60px] text-[#2C2B35]'>Управление запасами розничного магазина</h2>
                    <p className='text-[20px] text-[#2C2B35] w-[648px] mb-[30px] mt-[20px]'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                    <button className='bg-[#43A548] w-[249px] h-[42px] rounded-[1000px] text-white hover:bg-[linear-gradient(100.98deg,_#43A548_-4.14%,_#52E259_108.69%)]'>Заказать демонстрацию</button>

                </div>

                <div className='w-[608px] h-[451px]'><img className='w-full' src={section1_img} alt="" /></div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
