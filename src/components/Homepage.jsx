import React from 'react'
import Header from './Header'
import Contents from './Contents'

function Homepage({}) {
  
  return (
    <div className=" Hompage w-full h-[100vh] bg-center bg-cover bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70')]">
        <Header/>
        <Contents/>
    </div>
  )
}

export default Homepage