
function Header() {
  return (
    <div className="flex justify-between items-center h-[80px]">
        <div className="logo">
            <img className="w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVhTjYJgR1DAQVQVFF-ceTwe3OCVKSGgKoQIfEMQDEWaxdvU&s" alt="" />
        </div>
        <div className="gap-[20px] lg:flex hidden">
            <a href="">Model S</a>
            <a href="">Model 3</a>
            <a href="">Model X</a>
            <a href="">Model Y</a>
            <a href="">Solar roof</a>
            <a href="">Solar Panels</a>
        </div>
        <div className="gap-[40px] lg:flex hidden ">
            <a href="">Shop</a>
            <a href="">Account</a>
            <a href="">Menu</a>
        </div>
        <div className="bar lg:hidden">
          <button className="px-[10px] py-[6px] bg-[#c6d9e9] mr-[10px]">Menu</button>
        </div>
        
    </div>
  )
}

export default Header