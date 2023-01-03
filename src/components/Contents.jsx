import React from 'react'

function Contents() {
    
  return (
    <div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-[40px]  font-bold">Model Y</h1>
            <p className=" mt-[20px] border-b-[1px] border-black inline-block">Schedule a Demo drive</p>
          </div>
          <div className="btns flex gap-[20px] justify-center mt-[350px]">
            <button className="BuyNow bg-[#122740] px-[70px] py-[10px] text-white font-bold rounded">Buy Now</button>
            <button className="Custom-order  bg-[#a1b6cd] px-[70px] py-[10px] text-[#3b3e44] font-bold rounded ">Custom order</button>
          </div>
        </div>
  )
}

export default Contents