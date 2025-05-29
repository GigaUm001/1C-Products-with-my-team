import React from 'react'

const SectionOneProops = ({ Text ,SubText, OsCl, SubTextCl}) => {
  return (
    <>
         <div className={`group rounded-[40px] bg-white flex items-center justify-center ${OsCl}`}>
            <div>
                <div className={`mb-[32px]`}>
                    <div className={`flex gap-[10px] items-center mb-[14px]`}> <div className={`bg-[#FDEAD4] w-[52px] h-[52px] rounded-[4px]`}>{/* icon */}</div> <h2 className={`font-bold text-[24px] mb-[14px] text-[#2C2B35]`}>{Text}</h2></div>
                    <p className={`text-[#6F7973] text-[16px] ${SubTextCl}`}>{SubText}</p>
                </div>
                    <button className={`w-[146px] h-[42px] border-2 text-[#43A548] rounded-[1000px] font-bold border-[#43A548] group-hover:text-white group-hover:bg-[linear-gradient(100.98deg,_#43A548_-4.14%,_#52E259_108.69%)] group-hover:border-0`}>Подробнее</button>
            </div>
        </div>

    </>
  )
}

export default SectionOneProops
