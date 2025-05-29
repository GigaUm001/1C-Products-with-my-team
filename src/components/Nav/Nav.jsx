import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className='w-[100%] h-[88px] flex items-center justify-between px-[100px] '>
        <h2 className='w-[172px] h-[40px] font-bold flex items-center gap-[10px]'><div className='bg-green-500 w-[40px] h-[40px] rounded-[50%] content-center text-center text-white text-[27px]'>H</div>1С-Товары</h2>

        <div>
            <ul className='flex items-center gap-[51px] text-[14px]'>
                <li className='hover:text-[#43A548]'>Как это работает</li>
                <li className='hover:text-[#43A548]'>Инструкции</li>
                <li className='hover:text-[#43A548]'>Продукты</li>
                <li className='hover:text-[#43A548]'>База знаний </li>
                <li className='hover:text-[#43A548]'>О нас</li>
                <button className='bg-[#43A548] w-[72px] h-[40px] rounded-[1000px] text-white hover:bg-[linear-gradient(100.98deg,_#43A548_-4.14%,_#52E259_108.69%)]'>Вход</button>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
